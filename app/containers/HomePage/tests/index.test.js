import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import HomePage from '../index';

describe('<HomePage />', () => {
  beforeAll(() => {});

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <HomePage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should fetch strings from backend on mount', () => {
    expect().toSomething();
  });

  it('', () => {
    expect().toSomething();
  });
});
