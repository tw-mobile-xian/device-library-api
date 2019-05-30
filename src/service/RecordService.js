import Database from '../common/db/database';
import Record from '../model/record';

export default class RecordService {
  constructor() {
    this._dataSource = new Database()
  }

  getRecords() {
    return this._dataSource.find(Record);
  }

  async getLatestRecordFor(deviceID) {
    const records = await this._dataSource.find(Record, { deviceID: deviceID });
    return records[records.length - 1];
  }

  createRecord(record) {
    return this._dataSource.save(record);
  }
}
