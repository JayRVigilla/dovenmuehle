class BackendData {
  constructor() {
    this.dataVar = ['test string', 'booboobutt'];
  }

  fetch() {
    const res = this.dataVar;
    return res;
  }

  post(str) {
    this.dataVar.unshift(str);
    return this.dataVar;
  }
}

module.exports = BackendData;
