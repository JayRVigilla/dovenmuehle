/*
 * StringList
 *
 * creates list item for each string from Server
 * accepts as a prop
 */

import React from 'react';
import PropTypes from 'prop-types';

function StringList({ stringList, isLoading, err }) {
  StringList.propTypes = {
    stringList: PropTypes.array,
  };

  const mapStrings = arr => arr.map(str => <li key={str.key}>{str.val}</li>);

  console.log('stringList', stringList);
  function renderedList(arr) {
    if (err) {
      return (
        <div>
          <p>{err.messsage}</p>
        </div>
      );
    }

    if (Array.isArray(arr) === true) {
      if (arr.length === 0) {
        return (
          <div>
            <p>No strings in list</p>
          </div>
        );
      }
      return (
        <div>
          <ul>{mapStrings(arr)}</ul>
        </div>
      );
    }
    return (
      <div>
        <p> String Array is not an Array :/ </p>
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

  return isLoading === true ? loadingMessage() : renderedList(stringList);
}

export default StringList;
