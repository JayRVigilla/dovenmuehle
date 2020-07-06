/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function HomePage() {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>

      <div>
        <p>\\Strings will go here...\\</p>
      </div>

      <div>
        <p>Want to add more strings?</p>
        <a href="/stacker">Click Here</a>
      </div>
    </div>
  );
}
