import DeviceService from '../service/DeviceService';
import RecordService from '../service/RecordService';
import Device, { DEVICE_STATUS } from '../model/device';
import { RECORD_TYPE } from '../model/record';

export default class ListingController {
  constructor() {
    this._deviceService = new DeviceService();
    this._recordService = new RecordService();
  }

  async getListings() {
    const devices = await Promise.all(
      this._deviceService.getDevices()
        .map(device => new Device(device))
        .map(async device => {
          const latestRecord = await this._recordService.getLatestRecordFor(device.id);
          const status = (latestRecord && latestRecord.type == RECORD_TYPE.BORROW) ? DEVICE_STATUS.UNAVAILABLE : DEVICE_STATUS.AVAILABLE;
          return Object.assign(JSON.parse(JSON.stringify(device)), { status: status });
        })
    );
    const iosDevices = devices.filter(device => device.platform === 'iOS');
    const androidDevices = devices.filter(device => device.platform === 'Android');
    return [
      {
        platform: 'iOS',
        devices: iosDevices
      },
      {
        platform: 'Android',
        devices: androidDevices
      }
    ];
  }
}
