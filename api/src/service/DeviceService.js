import Database from '../common/db/database';
import Device from "../model/device";

export default class DeviceController {
  constructor() {
    this._dataSource = new Database()
  }

  async getDevices() {
    return await this._dataSource.find(Device);
  }

  async getDeviceBy(id) {
    const devices = await this._dataSource.find(Device, {id: id});
    return devices[0];
  }

  async createDevice(device) {
    return await this._dataSource.save(device);
  }

  async updateDevice(device) {
    return await this._dataSource.update(Device, device);
  }
}
