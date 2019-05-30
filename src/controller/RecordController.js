import Record from '../model/record';
import RecordService from '../service/RecordService';
import DeviceService from '../service/DeviceService';
import { DAY } from '../common/time';

export default class RecordController {
  constructor() {
    this._recordService = new RecordService();
    this._deviceService = new DeviceService();
  }

  async getRecords() {
    const records = (await this._recordService.getRecords()).map(record => {
      const device = this._deviceService.getDeviceBy(record.deviceID)
      return Object.assign(JSON.parse(JSON.stringify(record)), { device: device }, { deviceID: undefined, __v: undefined });
    })
    return records;
  }

  async createRecord(recordDocument) {
    const record = new Record(Object.assign(recordDocument, { date: Date.now(), period: 3 * DAY }));
    const createdRecord = await this._recordService.createRecord(record);
    const device = this._deviceService.getDeviceBy(createdRecord.deviceID);
    return Object.assign(JSON.parse(JSON.stringify(createdRecord)), { device: device }, { deviceID: undefined, __v: undefined });
  }
}
