import MongooseDatabase from './mongoose/db';

export default class Database {
  constructor() {
    this._db = new MongooseDatabase();
  }
}
