"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isObject = (object) => {
    return object instanceof Object && object.constructor.name === 'Object';
};
exports.default = isObject;
