import { put, takeLatest } from 'redux-saga/effects';
// import { getAllStrings } from '../../ApiCalls';
import request from 'utils/request';
import { call } from 'file-loader';
import { storeStrings } from '../App/actions';
import { GET_STRINGS, GET_STRINGS_ERR } from '../../constants';

export function* getStringsFromAPI() {
  // console.log('running getStringsFromAPI()');
  const backendURL = 'http://localhost:3000/data';
  try {
    const { strings } = yield call(request, backendURL);
    // console.log(strings);
    yield put(storeStrings, strings);
  } catch (err) {
    yield put(GET_STRINGS_ERR, err);
  }
}

export default function* homePageSaga() {
  // console.log('running HomePage rootSaga()');
  yield takeLatest(GET_STRINGS, getStringsFromAPI);
  // console.log('ran takeLatest');
}
