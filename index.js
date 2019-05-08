import isSupported from './src/utils/is-supported'
import Collection from './src/collection'
import ID from './src/id'

class StorageDB {
  constructor(opts) {
    opts = opts || {}

    this.storage = opts.storage || window && window.localStorage
    this.database = opts.database || 'db'
    this.primaryKey = opts.primaryKey || '_id'
	this.sep = opts.sep || ':'
	this.ID = opts.ID || ID;

    if (!isSupported(this.storage)) {
      this.storage = null
    }
  }

  get(name, opts) {
    return new Collection(this, name, opts)
  }

  collection(name, opts) {
    return this.get(name, opts)
  }
}

if (window) {
  window.StorageDB = StorageDB
}

export default StorageDB
