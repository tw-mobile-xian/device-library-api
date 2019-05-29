import Database from '../common/db/database';
import Record from '../model/record';

export default class RecordController {
  constructor() {
    this._dataSource = new Database()
  }

  getRecords(completion) {
    return this._dataSource.find(Record, {}, (err, document) => {
      completion(document);
    });
  }

  createRecord(recordDocument, completion) {
    const record = new Record(recordDocument);
    this._dataSource.save(record, completion);
  }
}
