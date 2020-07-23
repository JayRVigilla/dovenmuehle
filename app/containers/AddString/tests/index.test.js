import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import configureStore from '../../../configureStore';

import AddString from '../index';

describe('<AddString />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <AddString />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  describe('onUpdateClientstring', () => {
    it('should call onUpdateClientString as input added', () => {
      const changeSpy = jest.fn();

      render(
        <Provider store={store}>
          <IntlProvider locale="en">
            <AddString onChangeUsername={changeSpy} />
          </IntlProvider>
        </Provider>,
      );
      // enter text into input

      expect(changeSpy).toHaveBeendCalled();
    });

    it('should update clientString to match input', () => {
      const changeSpy = jest.fn();
      render(
        <Provider store={store}>
          <IntlProvider locale="en">
            <AddString onChangeUsername={changeSpy} />
          </IntlProvider>
        </Provider>,
      );
      expect().toSomething();
    });
  });

  it('', () => {
    expect().toSomething();
  });
});
