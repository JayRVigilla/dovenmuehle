/*
 * StringList
 *
 * creates list item for each string from Server
 * accepts as a prop
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
import { getAllStrings } from '../../ApiCalls';

function StringList() {
  const INITIAL_STATE = [];
  const [stringList, setStringList] = useState(INITIAL_STATE);
  const [madeReq, setMadeReq] = useState(null);

  StringList.propTypes = {
    stringList: PropTypes.array,
  };

  useEffect(
    function renderStringList() {
      async function getStringList() {
        try {
          const res = await getAllStrings();
          const stringsArray = res.data.response;

          setMadeReq(true);
          if (stringList !== stringsArray) setStringList(stringsArray);
        } catch (err) {
          // console.error(err);
        }
      }
      getStringList();
    },
    [setStringList, madeReq],
  );

  function renderedList(arr) {
    return (
      <div>
        <ul>
          {arr.map(str => (
            <li>{str}</li>
          ))}
        </ul>
      </div>
    );
  }

  function loadingMessage() {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return madeReq === null ? loadingMessage() : renderedList(stringList);
}

export default StringList;
