import fs from 'fs';
import path from 'path';

import Database from '../common/db/database';
import Device from '../model/device';

export default class DeviceController {
  constructor() {
    this._dataSource = new Database()
  }

  devices() {
    const rawData = fs.readFileSync(path.resolve(__dirname, '../../resource/devices.json'));
    const devices = JSON.parse(rawData);
    return devices.map(device => new Device(device));
  }
}
