// import { getAllStrings } from '../../ApiCalls';
import { GET_STRINGS, STORE_STRINGS, GET_STRINGS_ERR } from './constants';

// export function fetchStrings() {
//   return async dispatch => {
//     const response = getAllStrings();
//     return dispatch(getStringsArray(response.data));
//   };
// }

export function getStringsArray() {
  return {
    type: GET_STRINGS,
  };
}

export function storeStrings(strings) {
  return {
    type: STORE_STRINGS,
    strings,
    madeReq: true,
  };
}

export function errorStrings(err) {
  return {
    type: GET_STRINGS_ERR,
    err,
    madeReq: true,
  };
}
