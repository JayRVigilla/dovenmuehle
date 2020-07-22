/*
 * StringList
 *
 * creates list item for each string from Server
 * accepts as a prop
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { getAllStrings } from '../../ApiCalls';

function StringList({ stringList, madeReq }) {
  StringList.propTypes = {
    stringList: PropTypes.array,
  };

  function renderedList(arr) {
    if (arr === undefined) {
      return (
        <div>
          <p>Array passed to component is undefined</p>
        </div>
      );
    }

    if (arr.length === 0) {
      return (
        <div>
          <p>No strings in list</p>
        </div>
      );
    }
    return (
      <div>
        <ul>
          {arr.map(str => (
            <li key={str.key}>{str.val}</li>
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

  return madeReq === false ? loadingMessage() : renderedList(stringList);
}

export default StringList;
