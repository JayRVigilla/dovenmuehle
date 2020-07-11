const fs = require('fs');
const prependFile = require('prepend-file');
const dataFile = './server/backendData.txt';

class BackendData {
  static get() {
    const data = fs.readFileSync(dataFile, 'utf-8');
    const dataTrimed = data.slice(0, -2);
    const stringArray = dataTrimed.split(', ');
    return stringArray;
  }

  static post(clientString) {
    prependFile(dataFile, `${clientString}, `, err => {
      if (err) throw err;
      const data = fs.readFileSync(dataFile, 'utf-8');
      data.split(', ');
    });
  }
}

module.exports = BackendData;
