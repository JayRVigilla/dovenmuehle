/*
 * HomePage
 *
 * found at '/'
 * Holds StringList component, passes props
 * makes axios call and passes strings as prop
 */

import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid';
import injectSaga from 'utils/injectSaga';
// import { DAEMON } from 'utils/constants';
import useInjectReducer from 'utils/injectReducer';
import { watchGetStrings } from './saga';
import messages from './messages';
import StringList from './StringList';
// import { getAllStrings } from '../../ApiCalls';
import reducer from './reducer';

// ...

export function mapDispatchToProps(dispatch) {
  return {
    onGetStrings: () => dispatch({ type: 'GET_STRINGS' }),
  };
}

const mapStateToProps = state => ({ strings: state.strings });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = useInjectReducer({ key: 'HomePage', reducer });

const withSaga = injectSaga({
  key: 'HomePage',
  saga: watchGetStrings,
});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(function HomePage({ onGetStrings }) {
  // const withSaga = useInjectSaga(key, saga);
  const [stringList, setStringList] = useState(null);
  const [madeReq, setMadeReq] = useState(false);

  // const dispatch = useDispatch();
  // const store = useStore();
  useEffect(function renderStringList() {
    function addUniqueIds(array) {
      const newArray = array.map(val => {
        const dataObj = {
          val,
          key: uuid(),
        };
        return dataObj;
      });
      return newArray;
    }
    async function getStringList() {
      try {
        // const res = await getAllStrings();
        // store.runSaga(rootSaga);
        // dispatch({ type: 'GET_STRINGS' });
        onGetStrings();
        const strings = addUniqueIds(/* res.data.response */);
        if (stringList === null) setStringList(strings);
        setMadeReq(true);
      } catch (err) {
        // console.error(err);
      }
    }
    // dispatch({ type: 'GET_STRINGS' });
    getStringList();
  }, []);

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
        <StringList stringList={stringList} madeReq={madeReq} />
      </div>
    </div>
  );
});

// export default HomePage;
