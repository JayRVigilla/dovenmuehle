/*
 * HomePage
 *
 * found at '/'
 * Holds StringList component, passes props
 * makes axios call and passes strings as prop
 */

import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import uuid from 'uuid';
import messages from './messages';
import StringList from './StringList';
import { getAllStrings } from '../../ApiCalls';

// import { useSelector } from 'react-redux';

function HomePage() {
  // const mapStateToProps = state => ({
  //   string: state.string,
  // });

  // const mapDispatchToProps = dispatch => {
  //   onAddString: str => dispatch({ type: 'ADD_STRING', value: str }),
  //   onGetStrings: () => dispatch({ type: 'FETCH_STRINGS', value: '' })
  // };
  const [stringList, setStringList] = useState(null);
  const [madeReq, setMadeReq] = useState(false);

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
        const res = await getAllStrings();
        const strings = addUniqueIds(res.data.response);
        setStringList(strings);
        setMadeReq(true);
        //   if (stringList !== stringsArray) setStringList(stringsArray);
      } catch (err) {
        console.error(err);
      }
    }
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
}

export default HomePage;
