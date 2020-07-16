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
  // const [stringArray, setStringArray] = useState(stringList);
  // const [madeReq, setMadeReq] = useState(null);

  StringList.propTypes = {
    stringList: PropTypes.array,
  };

  // useEffect(function (){ }, [stringList, madeReq]);

  function renderedList(arr) {
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
