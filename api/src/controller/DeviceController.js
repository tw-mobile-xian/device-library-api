import RecordService from '../service/RecordService';
import DeviceService from '../service/DeviceService';
import {RECORD_TYPE} from '../model/record';
import Device, {DEVICE_STATUS} from '../model/device';

const uuidv4 = require('uuid/v4');

export default class DeviceController {
  constructor() {
    this._recordService = new RecordService();
    this._deviceService = new DeviceService();
  }

  async getDevices() {
    return await Promise.all(
        (await this._deviceService.getDevices())
            .map(device => new Device(device))
            .map(async device => {
              const latestRecord = await this._recordService.getLatestRecordFor(device.id);
              const status = (latestRecord && latestRecord.type === RECORD_TYPE.BORROW) ? DEVICE_STATUS.UNAVAILABLE : DEVICE_STATUS.AVAILABLE;
              return Object.assign(JSON.parse(JSON.stringify(device)), {status: status});
            })
    );
  }

  async getDeviceBy(id) {
    const device = await this._deviceService.getDeviceBy(id);
    if (device) {
      const records = (await this._recordService.getRecordsFor(device.id)).map( record => {
        return Object.assign(JSON.parse(JSON.stringify(record)), {deviceID: undefined, __v: undefined});
        });
      const latestRecord = await this._recordService.getLatestRecordFor(device.id);
      const status = (latestRecord && latestRecord.type === RECORD_TYPE.BORROW) ? DEVICE_STATUS.UNAVAILABLE : DEVICE_STATUS.AVAILABLE;
      return Object.assign(JSON.parse(JSON.stringify(device)), { status: status, expanded: { records: records } });
    }
  }

  async createDevice(deviceDocument) {
    const device = new Device(Object.assign(deviceDocument, {id: uuidv4()}));
    const createdDevice = await this._deviceService.createDevice(device);
    return Object.assign(JSON.parse(JSON.stringify(createdDevice)), { __v: undefined });
  }

  async updateDeviceBy(id, deviceDocument) {
    const updatedDevice = await this._deviceService.updateDeviceBy(id, deviceDocument);
    return Object.assign(JSON.parse(JSON.stringify(updatedDevice)), { __v: undefined });
  }

  async deleteDeviceBy(id) {
    const deletedDevice = await this._deviceService.deleteDeviceBy(id);
    return Object.assign(JSON.parse(JSON.stringify(deletedDevice)), {__v: undefined});
  }
}
