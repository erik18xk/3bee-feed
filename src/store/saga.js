import {  delay, takeLatest, all, put } from 'redux-saga/effects';
import types from './types';
import actions from './actions';

function* watchInitialize() {
    yield takeLatest(types.SET_REFRESH_STATE, function* (state) {
        /*
        In questa porzione di codice verranno richiamate le chiamate api e populato lo store [data]
        Terminato verrà chiamata la action START_COUNT_DOWN e lo stato ritorna in pending.
         */
        delay(500);
        window.console.log('The state has changed');
    })
}


export default function* rootSaga() {
    yield all([
        watchInitialize(),
    ])
}