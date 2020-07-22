import { createSelector } from 'reselect';
import { INITIAL_STATE } from './reducer';

const selectHomePage = state => state.homePage || INITIAL_STATE;

const makeSelectStrings = () =>
  createSelector(
    selectHomePage,
    homePageState => homePageState.strings,
  );

const makeSelectIsLoading = () =>
  createSelector(
    selectHomePage,
    homePageState => homePageState.isLoading,
  );

const makeSelectErr = () =>
  createSelector(
    selectHomePage,
    homePageState => homePageState.err,
  );

export {
  selectHomePage,
  makeSelectStrings,
  makeSelectIsLoading,
  makeSelectErr,
};
