import { prependString } from '../../ApiCalls';

export default async function sendPostToAPI(string) {
  return async dispatch => {
    const response = prependString(string);
    return dispatch(addString(response.data));
  };
}

function addString(string) {
  return {
    type: 'ADD_STRING',
    payload: string,
  };
}
