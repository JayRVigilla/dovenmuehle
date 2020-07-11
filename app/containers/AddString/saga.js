import { takeLeading, put } from 'redux-saga/effects';

function* addStringAsync(str) {
  yield put({ type: 'ADD_STRING_ASYNC', value: str });
}

export function* watchAddString() {
  yield takeLeading('ADD_STRING', addStringAsync);
}
