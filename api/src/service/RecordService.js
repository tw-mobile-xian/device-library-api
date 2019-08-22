import Database from '../common/db/database';
import Record from '../model/record';

export default class RecordService {
  constructor() {
    this._dataSource = new Database()
  }

  async getRecords() {
    return await this._dataSource.find(Record);
  }

  async getRecordsFor(deviceID) {
    return await this._dataSource.find(Record, { deviceID: deviceID });
  }

  async getLatestRecordFor(deviceID) {
    const records = this.getRecordsFor(deviceID);
    return records[records.length - 1];
  }

  async createRecord(record) {
    return await this._dataSource.save(record);
  }
}
