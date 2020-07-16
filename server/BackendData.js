class BackendData {
  constructor() {
    this.dataVar = [];
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
