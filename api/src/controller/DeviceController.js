import RecordService from '../service/RecordService';
import DeviceService from '../service/DeviceService';
import {RECORD_TYPE} from '../model/record';
import Device, {DEVICE_STATUS} from '../model/device';

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
      const latestRecord = await this._recordService.getLatestRecordFor(device.id);
      const status = (latestRecord && latestRecord.type === RECORD_TYPE.BORROW) ? DEVICE_STATUS.UNAVAILABLE : DEVICE_STATUS.AVAILABLE;
      return Object.assign(JSON.parse(JSON.stringify(device)), { status: status });
    }
  }
}
