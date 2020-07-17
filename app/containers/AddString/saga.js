import { takeLeading, call } from 'redux-saga/effects';
import { prependString } from '../../ApiCalls';

function* addStringAsync() {
  // yield put({ type: 'ADD_STRING_ASYNC', payload: str });
  // console.log('running AddStringAsync');
  yield call(prependString);
  // const result = yield prependString(str);
}

export default function* rootSaga() {
  // console.log('running AddString rootSaga()');
  yield takeLeading('ADD_STRING', addStringAsync);
  // yield takeLeading('ADD_STRING', prependString);
}
