/*
 *
 * HomePage reducer
 *
 */
// import { prependString } from '../../ApiCalls';

/* eslint-disable default-case, no-param-reassign */
const getStringsReducer = (state = [], action) => {
  const newState = [...state];
  switch (action.type) {
    case 'ADD_STRINGS':
      // const res = prependString(str);
      newState.strings = [action.value + newState.strings];
  }
  return newState;
};

export default getStringsReducer;
