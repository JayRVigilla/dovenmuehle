/*
 * AddString
 *
 * form that allows client to add to txt file in backend
 *
 */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
// import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
// import useInjectReducer from 'utils/injectReducer';
// import { createStructuredSelector } from 'reselect';
import { DAEMON } from 'utils/constants';
import saga from './saga';
import messages from './messages';
// import LoadingIndicator from '../../components/LoadingIndicator';
import { prependString } from '../../ApiCalls';
import {} from './selectors';

function AddString() {
  const history = useHistory();

  // use effect

  // becomes prop
  const [clientString, setClientString] = useState('');

  // becomes a dispatch to prop
  const handleChange = evt => {
    setClientString(evt.target.value);
  };

  // becomes a dispatch to prop
  const handleSubmit = evt => {
    evt.preventDefault();
    prependString(clientString);
    setClientString('');
    history.push('/');
  };

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
        <form method="POST" onSubmit={handleSubmit}>
          <label htmlFor="clientString">
            <input name="clientString" onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
const withSaga = injectSaga({ key: 'addstring', saga, mode: DAEMON });

export default compose(withSaga)(AddString);
// export default AddString;
