"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MockStorage {
    constructor() {
        this.length = 0;
    }
    key() { }
    setItem() { }
    getItem() { }
    removeItem() { }
}
exports.default = MockStorage;
