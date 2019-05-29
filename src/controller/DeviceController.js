import Database from '../common/db/database';
import Device from ''

export default class DeviceController {
  constructor() {
    this._dataSource = new Database()
  }

  devices() {
    this._dataSource.find()
  }
}
