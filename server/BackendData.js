const database = require('./database');

class BackendData {
  fetch() {
    const res = database;
    return res;
  }

  post(str) {
    // regex checks if at least one character is not whitespace
    // pulled from https://stackoverflow.com/questions/2249460/how-to-use-javascript-regex-to-check-for-empty-form-fields
    if (/([^\s])/.test(str)) {
      database.unshift(str);
      return true;
    }
    return false;
  }
}

module.exports = BackendData;
