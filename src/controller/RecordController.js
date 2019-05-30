import Database from '../common/db/database';
import Record from '../model/record';

export default class RecordController {
  constructor() {
    this._dataSource = new Database()
  }

  getRecords(completion) {
    return this._dataSource.find(Record, {}, completion);
  }

  getLatestRecordFor(deviceID, completion) {
    return this._dataSource.find(Record, {deviceIDs: [deviceID]}, (err, records) => {
      const latest = records[records.length - 1];
      completion(latest);
    });
  }

  createRecord(recordDocument, completion) {
    const record = new Record(recordDocument);
    this._dataSource.save(record, completion);
  }
}
