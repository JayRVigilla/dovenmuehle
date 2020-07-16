import { put, takeEvery } from 'redux-saga/effects';

function* getStringsAsync() {
  console.log('running getStringAsync()');
  yield put({ type: 'GET_STRINGS_ASYNC' });
}

export default function* rootSaga() {
  console.log('running rootSaga()');
  yield takeEvery('GET_STRINGS', getStringsAsync);
}
