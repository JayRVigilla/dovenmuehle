import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import AddString, { mapDispatchToProps } from '../index';
import { updateClientString, postString, postSringsError } from '../actions';
import configureStore from '../../../configureStore';

describe('<AddString />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({ clientString: undefined }, browserHistory);
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

  // it('should should go to HomePage when link clicked', () => {
  //   // TODO trigger link click
  //   expect().toSomething();
  // });

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

      describe('onSubmit', () => {
        it('should be injected', () => {
          const dispatch = jest.fn;
          const result = mapDispatchToProps(dispatch);
          expect(result.onSubmit).toBeDefined();
        });

        // TODO: failing -> calling postStringsErr becasue clientString submitted is undefined
        it('should dispatch onSubmit with postString when called with valid string', () => {
          const dispatch = jest.fn();
          const result = mapDispatchToProps(dispatch);
          const validString = 'testString';

          result.onSubmit();
          expect(dispatch).toHaveBeenCalledWith(postString(validString));
        });

        it('should dispatch onSubmit with postStringError when called with empty string', () => {
          // client string in store is undefined
          const dispatch = jest.fn();
          const result = mapDispatchToProps(dispatch);
          result.onSubmit();
          expect(dispatch).toHaveBeenCalledWith(postSringsError());
        });
      });
    });
  });
});
