import fs from 'fs';
import path from 'path';

import Database from '../common/db/database';
import Device from '../model/device';

export default class DeviceController {
  constructor() {
    this._dataSource = new Database()
  }

  getDevices() {
    const rawData = fs.readFileSync(path.resolve(__dirname, '../../resource/devices.json'));
    const devices = JSON.parse(rawData).map(device => new Device(device));
    return devices;
  }

  getDeviceBy(id) {
    const rawData = fs.readFileSync(path.resolve(__dirname, '../../resource/devices.json'));
    const devices = JSON.parse(rawData).map(device => new Device(device));
    const device = devices.filter(device => device.id == id)[0];
    return device;
  }
}
