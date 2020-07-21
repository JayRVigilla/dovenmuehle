import { getAllStrings } from '../../ApiCalls';

export function fetchStrings() {
  return async dispatch => {
    const response = getAllStrings();
    return dispatch(getStringsArray(response.data)); // *TODO dispatch actions
  };
}

function getStringsArray(array) {
  return {
    type: 'GET_STRINGS',
    array,
  };
}

export function storeStrings(strings) {
  return {
    type: 'STORE_STRINGS',
    strings,
  };
}
