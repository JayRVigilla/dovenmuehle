/*
 *
 * AddString reducer
 *
 */

/* eslint-disable default-case, no-param-reassign */
import produce from 'immer';
import {
  FORM_STRING,
  POST_STRING,
  POST_STRINGS_ERR,
  STORE_STRING,
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
      case FORM_STRING:
        draft.clientString = action.clientString;
        break;

      case POST_STRING:
        draft.isLoading = true;
        break;

      case STORE_STRING:
        draft.prepended = true;
        draft.isLoading = false;
        break;

      case POST_STRINGS_ERR:
        draft.something = true;
        draft.err = action.err;
        break;
    }
  });

export default addStringReducer;
