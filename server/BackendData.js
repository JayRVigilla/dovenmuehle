const database = require('./database');

class BackendData {
  fetch() {
    const res = database;
    return res;
  }

  post(str) {
    // regex checks if at least one character is not whitespace
    // pulled from https://stackoverflow.com/questions/2031085/how-can-i-check-if-string-contains-characters-whitespace-not-just-whitespace
    if (str && /\S/.test(str)) {
      database.unshift(str);
    }
    return database;
  }
}

module.exports = BackendData;
