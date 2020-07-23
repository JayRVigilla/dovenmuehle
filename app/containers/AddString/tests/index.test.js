import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import AddString, { mapDispatchToProps } from '../index';
import { updateClientString, postString } from '../actions';
import configureStore from '../../../configureStore';

describe('<AddString />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AddString />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should should go to HomePage when link clicked', () => {
    // trigger link click
    expect().toSomething();
  });
  describe('mapDispatchtoProps', () => {
    describe('onUpdateClientstring', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onUpdateClientString).toBeDefined();
      });

      it('should dispatch onUpdateClientString when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const testString = 'mxstbr';
        result.onUpdateClientString({ target: { value: testString } });
        expect(dispatch).toHaveBeenCalledWith(updateClientString(testString));
      });

      // will have to mock dispatches... probably
      describe('onSubmit', () => {
        it('should be injected', () => {
          const dispatch = jest.fn;
          const result = mapDispatchToProps(dispatch);
          expect(result.onSubmit).toBeDefined();
        });

        it('should dispatch onSubmit when called', () => {
          const dispatch = jest.fn();
          const result = mapDispatchToProps(dispatch);
          result.onSubmit();
          expect(dispatch).toHaveBeenCalledWith(postString());
        });
      });
    });

    it('', () => {});
  });
});
