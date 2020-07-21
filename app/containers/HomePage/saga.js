import { put, takeLatest } from 'redux-saga/effects';
// import { getAllStrings } from '../../ApiCalls';
import request from 'utils/request';
import { call } from 'file-loader';
import { storeStrings } from '../App/actions';

function* getStringsAsync() {
  // console.log('running getStringsAsync()');
  const backendURL = 'http://localhost:3000/data';

  // const strings = yield getAllStrings();
  const { strings } = yield call(request, backendURL);
  // console.log(strings);
  yield put(storeStrings(strings));
}

export function* watchGetStrings() {
  // console.log('running HomePage rootSaga()');
  yield takeLatest('GET_STRINGS', getStringsAsync);
}
