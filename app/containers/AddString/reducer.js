/*
 *
 * AddString reducer
 *
 */

/* eslint-disable default-case, no-param-reassign */
const INITIAL_STATE = { memes: [] };

const addStringReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_STRING':
      return { ...state, strings: [...state.strings, action.payload] };
  }
  return undefined; // TODO: linter wants return at end of arrow function, this feels hacky
};

export default addStringReducer;
