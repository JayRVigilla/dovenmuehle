/*
 * AddString
 *
 * form that allows client to POST and prepend a string to backend
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import saga from './saga';
import messages from './messages';
import CenteredSection from './CenteredSection';
import A from '../../components/A';
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
)(function AddString({ clientString, onSubmit, onUpdateClientString }) {
  const listStyle = { listStyleType: 'none' };

  return (
    <CenteredSection>
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>

        <div>
          <h2>
            <FormattedMessage {...messages.subHead} />
          </h2>
          <p>To add an event towards the beginning of the story:</p>
          <div className="list-container">
            <ul style={listStyle}>
              <li>Enter your plot point</li>
              <li>Click Submit</li>
            </ul>
          </div>
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
        <br />
        <br />
        <A href="/">See your mystery so far...</A>
      </div>
    </CenteredSection>
  );
});
