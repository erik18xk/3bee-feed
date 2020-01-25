import { createAction } from 'redux-actions';
import types from './types';

const _changeState = createAction(types.SET_REFRESH_STATE);
const changeState = status => _changeState({ status });

const _initialize = createAction(types.INITIALIZE);
const initialize = () => _initialize({});

export default {
    changeState,
    initialize,
}