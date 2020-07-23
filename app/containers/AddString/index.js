/*
 * AddString
 *
 * form that allows client to add to txt file in backend
 *
 */

import React from 'react';
// import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import saga from './saga';
import messages from './messages';
// import LoadingIndicator from '../../components/LoadingIndicator';
import {
  makeSelectClientString,
  makeSelectIsLoading,
  makeSelectErr,
} from './selectors';
import { postString, updateClientString, postSringsError } from './actions';
import reducer from './reducer';

const key = 'addString';

const mapStateToProps = createStructuredSelector({
  clientString: makeSelectClientString(),
  isLoading: makeSelectIsLoading(),
  err: makeSelectErr(),
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
)(function AddString({
  clientString,
  // isLoading,
  // prepended, if false then pop up message "cannot be all whitespace"
  onSubmit,
  onUpdateClientString,
}) {
  // use effect?

  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>

      <div>
        <h2>
          <FormattedMessage {...messages.subHead} />
        </h2>
        <p>To add a event towards the beginning of the story:</p>
        <ul>
          <li>Enter your plot point</li>
          <li>Click Submit</li>
        </ul>
        <a href="/">See your mystery</a>
      </div>

      <div>
        <form onSubmit={onSubmit}>
          <label htmlFor="clientString">
            <input
              id="clientString"
              type="text"
              value={clientString}
              onChange={onUpdateClientString}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
});

export function mapDispatchToProps(dispatch) {
  return {
    onUpdateClientString: evt => dispatch(updateClientString(evt.target.value)),
    onSubmit: evt => {
      if (
        evt !== undefined &&
        evt.preventDefault &&
        // regex checks if at least one character is not whitespace
        // pulled from https://stackoverflow.com/questions/2249460/how-to-use-javascript-regex-to-check-for-empty-form-fields
        /([^\s])/.test(evt.target.value)
      ) {
        evt.preventDefault();
        dispatch(postString());
        dispatch(updateClientString(''));
      }
      dispatch(postSringsError());
    },
  };
}
