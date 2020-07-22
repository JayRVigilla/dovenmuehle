import { put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { call } from 'file-loader';
import { storeStrings, errorStrings } from '../App/actions';
import { GET_STRINGS } from '../../constants';

export function* getStringsFromAPI() {
  console.log('running getStringsFromAPI()');
  const backendURL = 'http://localhost:3000/data';

  try {
    const { strings } = yield call(request, backendURL);
    yield put(storeStrings, strings);
    console.log(strings);
  } catch (err) {
    yield put(errorStrings, err);
  }
}

export default function* homePageSaga() {
  console.log('running HomePage rootSaga()');
  // should be going to getStringsFromAPI
  yield takeLatest(GET_STRINGS, getStringsFromAPI);
}
