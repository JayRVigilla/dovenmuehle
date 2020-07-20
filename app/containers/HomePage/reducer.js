/*
 *
 * GetString reducer
 *
 */

/* eslint-disable default-case, no-param-reassign */
// import { getAllStrings } from '../../ApiCalls';
const INITIAL_STATE = { strings: [] };

const reducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'GET_STRINGS_ASYNC':
      newState.strings = action.value;
      break;
  }
  return newState;
};
// end

export default reducer;
