import fs from 'fs';
import path from 'path';

export default class DeviceController {
  getDevices() {
    const rawData = fs.readFileSync(path.resolve(__dirname, '../../../resource/devices.json'));
    return JSON.parse(rawData);
  }

  getDeviceBy(id) {
    const rawData = fs.readFileSync(path.resolve(__dirname, '../../../resource/devices.json'));
    const devices = JSON.parse(rawData);
    return devices.filter(device => device.id === id)[0];
  }
}
