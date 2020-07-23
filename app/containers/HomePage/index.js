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
import StringList from './StringList';
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
)(function HomePage({ dispatchGetStrings, strings, isLoading }) {
  useEffect(() => dispatchGetStrings(), []);
  console.log('strings from homepage', strings);

  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>

      <div>
        <p>Want to add more strings?</p>
        <a href="/add">Click Here</a>
      </div>

      <div>
        {/* {TODO: try using List in Components folder} */}
        <StringList stringList={strings} isLoading={isLoading} />
      </div>
    </div>
  );
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatchGetStrings: () => dispatch(getStringsArray()),
  };
}
