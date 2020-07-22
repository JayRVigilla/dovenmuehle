/*
 *
 * GetString reducer
 *
 */

/* eslint-disable default-case, no-param-reassign */
// import { getAllStrings } from '../../ApiCalls';
import produce from 'immer';
import { GET_STRINGS, STORE_STRINGS, GET_STRINGS_ERR } from './constants';

export const INITIAL_STATE = {
  isLoading: false,
  err: false,
  strings: false,
};

const homePageReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_STRINGS:
        draft.isLoading = true;
        draft.err = false;
        draft.strings = false;
        break;

      case STORE_STRINGS:
        draft.isLoading = false;
        draft.strings = action.strings;
        break;

      case GET_STRINGS_ERR:
        draft.isLoading = false;
        draft.err = true;
        break;
    }
  });

export default homePageReducer;
