import { Router } from 'express';

import DeviceController from './controller/DeviceController';
import RecordController from './controller/RecordController';

import { DEVICE_STATUS } from './model/device';

const router = Router();

router.get('/', (req, res) => {
  res.type('text/html');
  res.send("<h1 style=\"text-align: center;\"> Hello, Device Library(小借借)! </h1>");
});

router.get('/devices', async (req, res, next) => {
  res.type('application/json');
  const controller = new DeviceController();
  const devices = await controller.getDevices();

  if (devices.length > 0) {
    res.status(200);
    res.send(devices);
  } else {
    next();
  }
});

router.get('/devices/:id', async (req, res, next) => {
  const controller = new DeviceController();
  const device = await controller.getDeviceBy(req.params.id);

  res.type('application/json');
  if (device) {
    res.status(200);
    res.send(device);
  } else {
    next();
  }
});

router.get('/records', async (req, res, next) => {
  const controller = new RecordController();
  const records = await controller.getRecords();
  if (records.length > 0) {
    res.status(200);
    res.send(records);
  } else {
    next();
  }
});

router.post('/records', async (req, res) => {
  const recordDocument = req.body;
  const recordController = new RecordController();
  const createdRecord = await recordController.createRecord(recordDocument);
  res.type('application/json');
  res.send(createdRecord);
});

export default router;
