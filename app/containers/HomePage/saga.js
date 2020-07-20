import { put, takeEvery } from 'redux-saga/effects';
// import { getAllStrings } from '../../ApiCalls';
import request from 'utils/request';
import { call } from 'file-loader';

export function* getStringsAsync() {
  // console.log('running getStringsAsync()');
  const backendURL = 'http://localhost:3000/data';

  // const strings = yield getAllStrings();
  const { strings } = yield call(request, backendURL);

  yield put({ strings }); // TODO put takes an action
}

export default function* rootSaga() {
  // console.log('running HomePage rootSaga()');
  yield takeEvery('GET_STRINGS', getStringsAsync);
}
