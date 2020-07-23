/*
 *
 * AddString reducer
 *
 */

/* eslint-disable default-case, no-param-reassign */
import produce from 'immer';
import {
  CLIENT_STRING,
  POST_STRING,
  PREPENDED_STRING,
  POST_STRING_ERR,
} from './constants';

export const INITIAL_STATE = {
  clientString: '',
  err: false,
  prepended: false,
  isLoading: false,
};

const addStringReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CLIENT_STRING:
        draft.clientString = action.clientString;
        break;

      case POST_STRING:
        draft.isLoading = true;
        break;

      case PREPENDED_STRING:
        draft.isLoading = false;
        draft.prepended = true;
        break;

      case POST_STRING_ERR:
        draft.prepended = false;
        draft.err = action.err;
        break;
    }
  });

export default addStringReducer;
