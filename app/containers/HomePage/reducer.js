/*
 *
 * GetString reducer
 *
 */

/* eslint-disable default-case, no-param-reassign */
// import { getAllStrings } from '../../ApiCalls';
import produce from 'immer';

const INITIAL_STATE = { strings: [] };

const reducer = (state = INITIAL_STATE, action) => {
  // const newState = { ...state };
  produce(state, draft => {
    switch (action.type) {
      case 'GET_STRINGS':
        // console.log('in reducer, get_strings');
        draft.strings = action.strings;
        // console.log('draft.strings ', draft.strings);
        break;
    }
  });
};
// switch (action.type) {
//   case 'GET_STRINGS':
//     console.log('in reducer, get_strings_async');
//     newState.strings = action.strings;
//     console.log('newState ', newState);
//     break;

// case 'STORE_STRINGS':
//   console.log('in reducer, store_strings');
// return newState;
// };
// end

export default reducer;
