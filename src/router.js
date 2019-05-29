import { Router } from 'express';

import DeviceController from './controller/DeviceController';

const router = Router();

router.get('/', (req, res) => {
  res.type('text/plain');
  res.send("Hello, World!");
});

router.get('/devices', (req, res) => {
  res.type('application/json');
  res.status(200);
  const controller = new DeviceController();
  res.send(controller.getDevices());
});

router.get('/devices/:id', (req, res, next) => {
  const controller = new DeviceController();
  const device = controller.getDeviceBy(req.params.id);
  res.type('application/json');
  if (device) {
    res.status(200);
    res.send(device);
  } else {
    res.status(404);
    next();
  }
});

router.get('/records', (req, res) => {
});

router.post('/records', (req, res) => {
});

export default router;
