class BackendData {
  constructor() {
    this.dataVar = ['test string', 'booboobutt'];
  }

  fetch() {
    const res = this.dataVar;
    return res;
  }

  post(str) {
    // regex checks if at least one character is not whitespace
    // pulled from https://stackoverflow.com/questions/2031085/how-can-i-check-if-string-contains-characters-whitespace-not-just-whitespace
    // if (str && /\S/.test(str)) {
    this.dataVar.unshift(str);
    // }
    return this.dataVar;
  }
}

module.exports = BackendData;
