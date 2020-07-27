/*
 *
 * AddString reducer
 *
 */

/* eslint-disable default-case, no-param-reassign */
import produce from 'immer';
import {
  POST_STRING,
  PREPENDED_STRING,
  POST_STRING_ERR,
  UPDATE_CLIENT_STRING,
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
      case UPDATE_CLIENT_STRING:
        draft.clientString = action.clientString;
        draft.prepended = false;
        break;

      case POST_STRING:
        draft.isLoading = true;
        draft.err = false;
        break;

      case PREPENDED_STRING:
        draft.isLoading = false;
        draft.prepended = true;
        break;

      case POST_STRING_ERR:
        draft.isLoading = false;
        draft.prepended = false;
        draft.err = action.err;
        break;
    }
  });

export default addStringReducer;
