import {  delay, takeLatest, all, call, put, select } from 'redux-saga/effects';
import types from './types';
import actions from './actions';
import selectors from "./selectors";
const newsApi = process.env.NODE_ENV === 'development' ? require('./api.mock').default : require('./api').default;


const DELAY_BUTTON_VISIBILITY = 6000; // Change to 900000 for 15 minutes delay. Now is set to 1 minutes
const FAKE_API_DELAY = 1000; // Simulate API call delay

function* initSaga() {
    // set loading value to true ---> start api call.
    yield put(actions.setLoading({ loading: true }));
    yield delay(FAKE_API_DELAY);
    const data = yield call(newsApi.getNews);
    yield put(actions.setFeedData(data));

    yield put(actions.setLoading( { loading: false }));

    // This is the handler for the visibility of the button.
    yield delay(DELAY_BUTTON_VISIBILITY);
    yield put(actions.setButtonVisibility({ detail: true }))

}

function* watchSetUpdateFeeds() {
    yield takeLatest(types.REFRESH_FEEDS, function*() {
        yield put(actions.setButtonVisibility({ detail: false }));
        yield put(actions.setLoading({ loading: true }));
        yield delay(FAKE_API_DELAY);
        const data = yield call(newsApi.updateNews);
        yield put(actions.setFeedData(data));

        yield put(actions.setLoading( { loading: false }));

        yield delay(DELAY_BUTTON_VISIBILITY);
        yield put(actions.setButtonVisibility({ detail: true }))
    })
}

function* handleFilter() {
    yield takeLatest(types.FILTER_FEEDS, function*(action ) {
        const { detail } = action.payload;
        if (detail !== '') {
            const feeds = yield select(selectors.getFeeds);

            const filteredArray = yield feeds.feeds.filter(
                feed =>
                    feed.title.toLowerCase().includes(detail) ||
                    feed.content.toLowerCase().includes(detail)
            );
            yield put(actions.setFilterFeeds(filteredArray));
        } else {
            const data = yield call(newsApi.updateNews);
            yield put(actions.setFeedData(data));
        }


    })
}




export default function* rootSaga() {
    yield all([
        initSaga(),
        watchSetUpdateFeeds(),
        handleFilter(),
    ])
}