/*
 *
 * GetString reducer
 *
 */

/* eslint-disable default-case, no-param-reassign */
// import { getAllStrings } from '../../ApiCalls';
import produce from 'immer';

const INITIAL_STATE = { strings: [] };

const homePageReducer = (state = INITIAL_STATE, action) =>
  // const newState = { ...state };
  produce(state, draft => {
    switch (action.type) {
      case 'GET_STRINGS':
        console.log('in reducer, get_strings');
        draft.strings = action.strings;
        console.log('draft.strings ', draft.strings);
        break;
    }
  });

export default homePageReducer;
