/*
 *
 * GetString reducer
 *
 */

/* eslint-disable default-case, no-param-reassign */
const INITIAL_STATE = { strings: [] };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_STRINGS':
      return state;
    default:
      return state;
  }
};
// end

export default reducer;
