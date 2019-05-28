import { DAY } from '../common/time';

export default class Record {
  constructor(borrower, provider, devices, date, period) {
    this.borrower = borrower;
    this.provider = {};
    this.devices = [];
    this.date = date;
    this.period = period;
  }

  _defaultLeasingPeriod() {
    return 3 * DAY; 
  }
}
