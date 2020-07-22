import { put, takeLatest, call } from 'redux-saga/effects';
import request from 'utils/request';
import { storeStrings, errorStrings } from './actions';
import { GET_STRINGS } from './constants';

export function* getStringsFromAPI() {
  console.log('running getStringsFromAPI()');
  const backendURL = 'http://localhost:3000/data';

  try {
    const { strings } = yield call(request, backendURL);
    yield put(storeStrings(strings));
    console.log(strings);
  } catch (err) {
    yield put(errorStrings(err));
  }
}

export default function* homePageSaga() {
  console.log('running HomePage rootSaga()');
  yield takeLatest(GET_STRINGS, getStringsFromAPI);
}
