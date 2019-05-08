"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_supported_1 = require("./src/utils/is-supported");
const collection_1 = require("./src/collection");
const id_1 = require("./src/id");
class LSMongo {
    constructor(opts) {
        opts = opts || {};
        this.storage = opts.storage || window && window.localStorage;
        this.database = opts.database || 'db';
        this.primaryKey = opts.primaryKey || '_id';
        this.sep = opts.sep || ':';
        this.ID = opts.ID || id_1.default;
        if (!is_supported_1.default(this.storage)) {
            this.storage = null;
        }
    }
    get(name, opts) {
        return new collection_1.default(this, name, opts);
    }
    collection(name, opts) {
        return this.get(name, opts);
    }
}
exports.LSMongo = LSMongo;
if (window) {
    window.LSMongo = LSMongo;
}
