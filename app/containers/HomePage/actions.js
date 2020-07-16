import { getAllStrings } from '../../ApiCalls';

export function fetchStrings() {
  return async dispatch => {
    const response = getAllStrings();
    return dispatch(getStringsArray(response.data));
  };
}

function getStringsArray(array) {
  return {
    type: 'GET_STRINGS',
    array,
  };
}
