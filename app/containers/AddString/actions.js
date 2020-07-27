import {
  UPDATE_CLIENT_STRING,
  POST_STRING,
  PREPENDED_STRING,
  POST_STRING_ERR,
} from './constants';

export function postString(clientString) {
  return {
    type: POST_STRING,
    clientString,
  };
}

export function updateClientString(clientString) {
  return {
    type: UPDATE_CLIENT_STRING,
    clientString,
  };
}

export function prependedString(prepended) {
  return {
    type: PREPENDED_STRING,
    prepended,
  };
}

export function postSringsError(err) {
  return {
    type: POST_STRING_ERR,
    err,
  };
}
