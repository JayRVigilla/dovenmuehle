import { createSelector } from 'reselect';
import { INITIAL_STATE } from './reducer';

const selectAddString = state => state.addString || INITIAL_STATE;

const makeSelectClientString = () =>
  createSelector(
    selectAddString,
    addStringState => addStringState.clientString,
  );

const makeSelectIsLoading = () =>
  createSelector(
    selectAddString,
    addStringState => addStringState.isLoading,
  );

const makeSelectErr = () =>
  createSelector(
    selectAddString,
    addStringState => addStringState.err,
  );

export {
  selectAddString,
  makeSelectClientString,
  makeSelectIsLoading,
  makeSelectErr,
};
