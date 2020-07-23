import { createSelector } from 'reselect';
import { INITIAL_STATE } from './reducer';

const selectAddString = state => state.addString || INITIAL_STATE;

const makeSelectStrings = () =>
  createSelector(
    selectAddString,
    addStringState => addStringState.strings,
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
  makeSelectStrings,
  makeSelectIsLoading,
  makeSelectErr,
};
