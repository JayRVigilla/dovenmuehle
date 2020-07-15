/*
 *
 * HomePage reducer
 *
 */
// import { prependString } from '../../ApiCalls';

/* eslint-disable default-case, no-param-reassign */
const stringsReducer = (state = [], action) => {
  const newState = [...state];
  switch (action.type) {
    case 'ADD_STRING':
      // const res = prependString(str);
      newState.strings = [action.value + newState.strings];
      break;
  }
  return newState;
};

export default stringsReducer;
