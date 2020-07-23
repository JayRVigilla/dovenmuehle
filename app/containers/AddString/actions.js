// import { prependString } from '../../ApiCalls';

// export default async function sendPostToAPI(string) {
//   return async dispatch => {
//     const response = prependString(string);
//     return dispatch(addString(response.data));
//   };
// }

// function addString(string) {
//   return {
//     type: 'ADD_STRING',
//     payload: string,
//   };
// }

import {
  CLIENT_STRING,
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
    type: CLIENT_STRING,
    clientString,
  };
}

export function prependedString(prepended) {
  return {
    type: PREPENDED_STRING,
    prepended,
  };
}

export function postSringsError(clientString) {
  return {
    type: POST_STRING_ERR,
    clientString,
  };
}
