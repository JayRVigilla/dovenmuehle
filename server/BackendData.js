const fs = require('fs');

const dataFile = 'backendData.txt';
// const argument = process.argv[2];

class BackendData {
  static async get() {
    const data = fs.readFileSync(dataFile, 'utf-8');
    return data;
  }

  static async post(clientString) {
    function fileToArray(file) {
      const data = fs.readFileSync(file, 'utf-8');
      return JSON.parse(data);
    }

    function prepend(newString) {
      dataArray.unshift(newString);
      return dataArray;
    }

    function saveChanges(newDataArray) {
      const string = JSON.stringify(newDataArray);
      fs.writeFileSync(dataFile, string);
      return newDataArray;
    }

    const dataArray = fileToArray(dataFile);
    const modifiedData = prepend(clientString);
    saveChanges(modifiedData);
  }
}

module.exports = BackendData;
