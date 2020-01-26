import { createAction } from 'redux-actions';
import types from './types';

const _changeState = createAction(types.SET_REFRESH_STATE);
const changeState = status => _changeState({ status });

const _setFilterFeeds = createAction(types.SET_FILTER_FEEDS);
const setFilterFeeds = feeds => _setFilterFeeds({ feeds });

const _filterFeeds = createAction(types.FILTER_FEEDS);
const filterFeeds = detail => _filterFeeds( { detail });

const _initialize = createAction(types.INITIALIZE);
const initialize = () => _initialize({});

const setFeedData = createAction(types.SET_FEED_DATA);

const setLoading = createAction(types.SET_LOADING);

const setButtonVisibility = createAction(types.SET_BUTTON_VISIBILITY);

const refreshFeeds = createAction(types.REFRESH_FEEDS);



export default {
    changeState,
    initialize,
    setFeedData,
    setLoading,
    setButtonVisibility,
    refreshFeeds,
    filterFeeds,
    setFilterFeeds,
}