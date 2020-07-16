/*
 *
 * AddString reducer
 *
 */

/* eslint-disable default-case, no-param-reassign */
const INITIAL_STATE = { strings: [] };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_STRING':
      return { ...state, strings: [action.payload, ...state.strings] };
    default:
      return state;
  }
};
// end

export default reducer;
