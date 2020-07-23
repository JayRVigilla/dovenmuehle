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
import { postString, updateClientString } from './actions';
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
  // const history = useHistory();

  // use effect

  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>

      <div>
        <p>Welcome to the Stacker!</p>
        <p>
          Enter your string and click Submit to add a new string to the top of
          the stack.
        </p>
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
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(postString());
      dispatch(updateClientString(''));
    },
  };
}
