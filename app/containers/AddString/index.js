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
import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import saga from './saga';
import messages from './messages';
import { prependString } from '../../ApiCalls';

function AddString() {
  const history = useHistory();

  const [clientString, setClientString] = useState('');

  const handleChange = evt => {
    setClientString(evt.target.value);
  };

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
