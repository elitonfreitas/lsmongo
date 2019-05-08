"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ID {
    constructor() { }
    toString() {
        return (new Date().getTime() / 1000).toString(16).substr(-4) + Math.random().toString(16).substr(2, 12);
    }
}
exports.default = ID;
