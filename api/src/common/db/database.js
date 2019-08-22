import MongooseDatabase from './mongoose/db';

export default class Database {
  constructor() {
    this._db = new MongooseDatabase();
  }

  save(obj) {
    return this._db.save(obj);
  }

  find(model, query) {
    return this._db.find(model, query);
  }

  update(model, document, query) {
    return this._db.update(model, document, query);
  }

  delete(model, query) {
    return this._db.delete(model, query);
  }
}
