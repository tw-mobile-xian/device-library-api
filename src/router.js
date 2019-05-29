import { Router } from 'express';

import DeviceController from './controller/DeviceController';
import RecordController from './controller/RecordController';

const router = Router();

router.get('/', (req, res) => {
  res.type('text/html');
  res.send("<h1 style=\"text-align: center;\"> Hello, Device Library(小借借)! </h1>");
});

router.get('/devices', (req, res, next) => {
  res.type('application/json');
  const controller = new DeviceController();
  const devices = controller.getDevices();
  if (devices.length > 0) {
    res.status(200);
    res.send(devices);
  } else {
    next();
  }
});

router.get('/devices/:id', (req, res, next) => {
  const controller = new DeviceController();
  const device = controller.getDeviceBy(req.params.id);
  res.type('application/json');
  if (device) {
    res.status(200);
    res.send(device);
  } else {
    next();
  }
});

router.get('/records', (req, res, next) => {
  const controller = new RecordController();
  controller.getRecords((err, records) => {
    if (err) {
      res.status(500);
      res.send("500 Internal Error: " + err);
      return;
    }
    if (records.length > 0) {
      res.status(200);
      res.send(records);
    } else {
      next();
    }
  });
});

router.post('/records', (req, res) => {
  console.log(req.body);
  // const recordDocument = {
  //   type: "borrow",
  //   borrower: {
  //     id: "wechat_gx",
  //     name: "GX",
  //     contact: "1234567890",
  //     team: "AAP"
  //   },
  //   devices: [
  //     {
  //       "id": "2",
  //       "name": "Pixel 3",
  //       "screen": "6-inches",
  //       "platform": "Android",
  //       "version": "8.0",
  //       "storage": "128GB"
  //     }
  //   ],
  //   date: Date.now(),
  //   period: 3 * 24 * 60 * 60 * 1000
  // };
  const controller = new RecordController();
  controller.createRecord(recordDocument, (err, result) => {
    console.log(result);
    res.type('application/json');
    res.send(result);
  });
});

export default router;
