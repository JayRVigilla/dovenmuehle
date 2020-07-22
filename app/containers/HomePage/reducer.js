/*
 *
 * GetString reducer
 *
 */

/* eslint-disable default-case, no-param-reassign */
// import { getAllStrings } from '../../ApiCalls';
import produce from 'immer';
import { GET_STRINGS, STORE_STRINGS, GET_STRINGS_ERR } from '../../constants';

export const INITIAL_STATE = {
  madeReq: false,
  err: false,
  strings: false,
};

const homePageReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_STRINGS:
        console.log('in reducer, get_strings');
        draft.madeReq = true;
        draft.err = false;
        draft.strings = false;
        break;

      case STORE_STRINGS:
        console.log('in reducer, store_strings');
        draft.madeReq = true;
        draft.err = false;
        draft.strings = action.strings;
        break;

      case GET_STRINGS_ERR:
        console.log('in reducer, get_strings_err');
        draft.madeReq = true;
        draft.err = true;
        draft.strings = false;
        break;
    }
  });

export default homePageReducer;
