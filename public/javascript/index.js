$(document).ready(() => {
  requestRecords((err, records) => populateRecords(records));
  requestDevices((err, devices) => populateDevices(devices))
});

function requestRecords(completion) {
  fetch('/api/records', { headers: { identifier: adminIdentifier() } })
      .then(response => response.json())
      .then(records => completion(undefined, records.reverse()))
      .catch(error => completion(error));
}

function requestDevices(completion) {
  fetch('/api/devices', { headers: { identifier: adminIdentifier() } })
      .then(response => response.json())
      .then(devices => completion(undefined, devices))
      .catch(error => completion(error));
}

function adminIdentifier() {
  return getUrlParameter('identifier');
}

function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
};

function populateRecords(records) {
  (records || []).filter(record => record.device).forEach(record => $('#record-list').append(recordPanel(record)));
}

function populateDevices(devices) {
  (devices || []).forEach(device => $('#device-list').append(devicePanel(device)));
}

function recordPanel(record) {
  return "<li class='list-group-item'>" +
           "<div>" +
             "<div>" + "id: " + record._id + "</div>" +
             "<div>" + "type: " + record.type + "</div>" +
             (record.borrower ? ("<div>" + "borrower: " + record.borrower.name + "(" + record.borrower.team + ")" + "</div>") : "") +
             "<div>" + "date: " + format(new Date(record.date + " GMT+0000")) + "</div>" +
             "<div>" + "device: " + record.device.name + "</div>" +
           "</div>" +
         "</li>"
}

function personPanel(person) {
  return "<div class='person-panel'>" +
           "<div>" + "id: " + person.id + "</div>" +
           "<div>" + "name: " + person.name + "</div>" +
           "<div>" + "contact: " + person.contact + "</div>" +
           "<div>" + "team: " + person.team + "</div>" +
         "</div>"
}

function devicePanel(device) {
  return "<div class='device-panel list-group-item'>" +
           "<div>" + "id: " + device.id + "</div>" +
           "<div>" + "name: " + device.name + "</div>" +
           "<div>" + "screen: " + device.screen + "</div>" +
           "<div>" + "platform: " + device.platform + "</div>" +
           "<div>" + "version: " + device.version + "</div>" +
           "<div>" + "storage: " + device.storage + "</div>" +
           "<div>" + "status: " + device.status + "</div>" +
         "</div>"
}

function format(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  const second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return [year, month, day].join('-') + ' ' + [hour, minute, second].join(':');
}
