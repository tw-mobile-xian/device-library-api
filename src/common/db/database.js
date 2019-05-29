import MongooseDatabase from './mongoose/db';

export default class Database {
  constructor() {
    this._db = new MongooseDatabase();
  }

  save(obj, completion) {
    this._db.save(obj, completion);
  }

  find(model, query, completion) {
    this._db.find(model, query, completion);
  }
}
