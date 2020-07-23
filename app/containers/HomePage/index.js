/*
 * HomePage
 *
 * found at '/'
 * Holds StringList component, passes props
 * makes axios call and passes strings as prop
 */

import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import saga from './saga';
import messages from './messages';
import CenteredSection from './CenteredSection';
import List from '../../components/List';
import A from '../../components/A';
import LoadingIndicator from '../../components/LoadingIndicator';
import ListItem from '../../components/ListItem';
import reducer from './reducer';
import { getStringsArray } from './actions';
import {
  makeSelectStrings,
  makeSelectIsLoading,
  makeSelectErr,
} from './selectors';

const key = 'homePage';

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  err: makeSelectErr(),
  strings: makeSelectStrings(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = useInjectReducer({ key, reducer });

const withSaga = injectSaga({
  key,
  saga,
});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(function HomePage({ dispatchGetStrings, strings, isLoading, err }) {
  useEffect(() => {
    dispatchGetStrings();
  }, []);

  // Shows error message, or list of strings.
  // Let's user know if no strings
  function renderedList(stringsState) {
    if (err) {
      return (
        <div>
          <p>Something happened:</p>
          <p>{err.message}</p>
        </div>
      );
    }

    if (Array.isArray(stringsState)) {
      if (stringsState.length === 0) {
        return (
          <div>
            <p>Nothing has happened in our story yet</p>
          </div>
        );
      }
      return <List items={stringsState} component={ListItem} />;
    }

    return <LoadingIndicator />;
  }

  return (
    <CenteredSection>
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <CenteredSection>
          <div>
            <p>
              Every good mystery writer knows the secret to success is to work
              backwards. Read your mystery here.
            </p>
            <A href="/add">
              Click Here to add towards the beginning of your mystery
            </A>
          </div>
        </CenteredSection>

        <div>{isLoading ? <LoadingIndicator /> : renderedList(strings)}</div>
      </div>
    </CenteredSection>
  );
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatchGetStrings: () => dispatch(getStringsArray()),
  };
}
