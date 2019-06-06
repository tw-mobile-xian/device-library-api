export default class DateFormatter {
  static format(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return [year, month, day].join('-') + ' ' + [hour, minute, second].join(':');
  }
}