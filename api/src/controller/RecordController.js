import Record from '../model/record';
import RecordService from '../service/RecordService';
import DeviceService from '../service/DeviceService';
import {DAY} from '../common/time';
import DateFromatter from '../common/DateFormatter';

export default class RecordController {
  constructor() {
    this._recordService = new RecordService();
    this._deviceService = new DeviceService();
  }

  async getRecords() {
    return await Promise.all(
      (await this._recordService.getRecords()).map(async record => {
        const device = await this._deviceService.getDeviceBy(record.deviceID);
        const json = JSON.parse(JSON.stringify(record));
        json.date = DateFromatter.format(new Date(json.date));
        return Object.assign(json, {device: device}, {deviceID: undefined, __v: undefined});
      })
    );
  }

  async createRecord(recordDocument) {
    const record = new Record(Object.assign(recordDocument, { date: Date.now(), period: 3 * DAY }));
    const createdRecord = await this._recordService.createRecord(record);
    const device = await this._deviceService.getDeviceBy(createdRecord.deviceID);
    return Object.assign(JSON.parse(JSON.stringify(createdRecord)), { device: device }, { deviceID: undefined, __v: undefined });
  }
}
