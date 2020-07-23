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
  data: {
    clientString: '',
  },
  err: false,
  prepended: false,
  isLoading: false,
};

const addStringReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_CLIENT_STRING:
        draft.data.clientString = action.clientString;
        break;

      case POST_STRING:
        draft.isLoading = true;
        break;

      case PREPENDED_STRING:
        draft.isLoading = false;
        draft.prepended = action.prepended;
        break;

      case POST_STRING_ERR:
        draft.prepended = false;
        draft.err = action.err;
        break;
    }
  });

export default addStringReducer;
