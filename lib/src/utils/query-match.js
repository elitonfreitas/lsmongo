"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operator_1 = require("../operator");
const is_object_1 = require("./is-object");
const queryMatch = (query, target) => {
    if (!query || !Object.keys(query).length) {
        return true;
    }
    for (let field of Object.keys(query)) {
        let val = query[field];
        let tar = target[field];
        if (val instanceof RegExp) {
            if (!val.test(tar)) {
                return false;
            }
        }
        else if (is_object_1.default(val)) {
            for (let op of Object.keys(val)) {
                if (operator_1.default._checkExist(op) && !operator_1.default[op](val[op], tar)) {
                    return false;
                }
            }
        }
        else if (val !== tar) {
            return false;
        }
    }
    return true;
};
exports.default = queryMatch;
