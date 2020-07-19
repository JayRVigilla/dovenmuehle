import { put, takeEvery } from 'redux-saga/effects';
import { getAllStrings } from '../../ApiCalls';

export function* getStringsAsync() {
  console.log('running getStringsAsync()');
  const strings = yield getAllStrings();
  yield put({ strings }); // TODO put takes an action
}

export default function* rootSaga() {
  console.log('running HomePage rootSaga()');
  yield takeEvery('GET_STRINGS', getStringsAsync);
}
