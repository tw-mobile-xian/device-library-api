import { DAY } from '../utils/time';

export default class Record {
  constructor(borrower, provider, devices, date, period) {
    this.borrower = borrower;
    this.provider = {};
    this.devices = [];
    this.date = this._defaultLeasingPeriod();
    this.period = 0;
  }

  _defaultLeasingPeriod() {
    return 3 * DAY; 
  }
}
