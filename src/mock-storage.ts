class MockStorage {
  length: any;
  
  constructor() {
    this.length = 0
  }

  key() {}
  setItem() {}
  getItem() {}
  removeItem() {}
}

export default MockStorage
