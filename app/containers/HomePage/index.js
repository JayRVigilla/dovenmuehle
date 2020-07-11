/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 * Holds StringList component
 * makes axios call and passes strings as prop
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import StringList from './StringList';

function HomePage() {
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
        <StringList />
      </div>
    </div>
  );
}

export default HomePage;
