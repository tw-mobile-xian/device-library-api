export default class DateFormatter {
  static format(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return [year, month, day].join('-') + ' ' + [hour, minute, second].join(':');
  }
}