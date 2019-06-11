$(document).ready(() => {
  requestRecords((err, records) => populateRecords(records));
  requestDevices((err, devices) => populateDevices(devices))
});

function requestRecords(completion) {
  fetch('/api/records')
      .then(response => response.json())
      .then(records => completion(undefined, records.reverse()))
      .catch(error => completion(error));
}

function requestDevices(completion) {
  fetch('/api/devices')
      .then(response => response.json())
      .then(devices => completion(undefined, devices))
      .catch(error => completion(error));
}

function populateRecords(records) {
  (records || []).forEach(record => $('#record-list').append(recordPanel(record)));
}

function populateDevices(devices) {
  (devices || []).forEach(device => $('#device-list').append(devicePanel(device)));
}

function recordPanel(record) {
  return "<li class='list-group-item'>" +
           "<div>" +
             "<div>" + "id: " + record._id + "</div>" +
             "<div>" + "type: " + record.type + "</div>" +
             (record.borrower ? ("<div>" + "borrower: " + personPanel(record.borrower) + "</div>") : "") +
             "<div>" + "date: " + record.date + "</div>" +
             "<div>" + "device: " + devicePanel(record.device) + "</div>" +
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
         "</div>"
}
