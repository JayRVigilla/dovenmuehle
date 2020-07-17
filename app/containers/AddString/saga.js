import { takeLeading, put } from 'redux-saga/effects';
// import { prependString } from '../../ApiCalls';

function* addStringAsync(str) {
  yield put({ type: 'ADD_STRING_ASYNC', payload: str });
}

export default function* rootSaga() {
  console.log('running AddString rootSaga()');
  yield takeLeading('ADD_STRING', addStringAsync);
  // yield takeLeading('ADD_STRING', prependString);
}
