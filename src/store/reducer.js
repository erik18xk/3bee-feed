import types from './types';

export const initialState = () => ({
    isButtonVisible: false,
    feeds: {},
});

const reducers = (state = initialState(), action) => {
    const { payload } = action;
    const data = action && action.payload;
    switch (action.type) {
        case types.INITIALIZE:
            return {
                ...state,
                refreshFeed: false,
            };
        case types.SET_REFRESH_STATE:
            return {
                ...state,
                refreshFeed: payload.status,
            };
        case types.SET_FEED_DATA:
            console.log(data);
            return {
                ...state,
                feeds: {
                    ...state.feeds, ...data
                }
            };
        case types.SET_LOADING:
            return {
                ...state,
                loading: !!data.loading
            };
        case types.SET_BUTTON_VISIBILITY:
            return {
                ...state,
                isButtonVisible: data.detail
            };
        case types.REFRESH_FEEDS:
            return {
                ...state,
            };
        case types.FILTER_FEEDS:
            return {
                ...state,
            };

        default:
            return initialState();
    }
};

export default reducers;
