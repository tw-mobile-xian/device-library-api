import { DAY } from '../utils/time';

export default class Record {
  constructor(borrower, provider, devices, date, period) {
    this.borrower = borrower;
    this.provider = {};
    this.devices = [];
    this.date = Date.now();
    this.period = 0;
  }

  _defaultLeasingPeriod() {
    // 3 days -> ms
    return 3 * DAY; 
  }
}
