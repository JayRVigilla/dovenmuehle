import { put, takeLeading, call, select } from 'redux-saga/effects';
import request from 'utils/request';
// import { prependedString } from '../../ApiCalls';
import { POST_STRING } from './constants';
import { postSringsError, prependedString } from './actions';
import { makeSelectClientString } from './selectors';

function* addStringToAPI() {
  const backendURL = 'http://localhost:3000/data';
  const string = yield select(makeSelectClientString());
  const options = {
    method: POST_STRING,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ string }),
  };

  try {
    const prepended = yield call(request, backendURL, options);
    yield put(prependedString(prepended));
  } catch (err) {
    yield put(postSringsError(err));
  }
}

export default function* AddStringSaga() {
  yield takeLeading(POST_STRING, addStringToAPI);
}
