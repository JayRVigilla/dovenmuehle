import { GET_STRINGS, STORE_STRINGS, GET_STRINGS_ERR } from './constants';

export function getStringsArray() {
  return {
    type: GET_STRINGS,
  };
}

export function storeStrings(strings) {
  return {
    type: STORE_STRINGS,
    strings,
  };
}

export function errorStrings(err) {
  return {
    type: GET_STRINGS_ERR,
    err,
  };
}
