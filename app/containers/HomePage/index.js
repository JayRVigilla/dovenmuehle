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
// import { useStore } from 'react-redux';
import uuid from 'uuid';
import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
// import rootSaga from './saga';
import saga from './saga';
import messages from './messages';
import StringList from './StringList';
import { getAllStrings } from '../../ApiCalls';

function HomePage() {
  // const mapStateToProps = state => ({
  //   string: state.string,
  // });

  // const mapDispatchToProps = dispatch => ({
  //   onGetStrings: () => dispatch({ type: 'FETCH_STRINGS', value: '' }),
  //   onAddString: str => dispatch({ type: 'ADD_STRING', value: str }),
  // });

  const [stringList, setStringList] = useState(null);
  const [madeReq, setMadeReq] = useState(false);

  // const store = useStore();
  useEffect(
    function renderStringList() {
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
          const res = await getAllStrings();
          // store.runSaga(rootSaga);
          // dispatch({ type: 'GET_STRINGS' });
          const strings = addUniqueIds(res.data.response);
          if (stringList === null) setStringList(strings);
          setMadeReq(true);
        } catch (err) {
          console.error(err);
        }
      }
      // dispatch({ type: 'GET_STRINGS' });
      getStringList();
    },
    [stringList],
  );

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
}
const withSaga = injectSaga({ key: 'homepage', saga, mode: DAEMON });

export default compose(withSaga)(HomePage);

// export default HomePage;
