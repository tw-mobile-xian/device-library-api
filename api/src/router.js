import { Router } from 'express';

import DeviceController from './controller/DeviceController';
import RecordController from './controller/RecordController';
import ListingController from './controller/ListingController';

const router = Router();

router.get('/listings', async (req, res, next) => {
  const controller = new ListingController();
  const listings = await controller.getListings();
  res.status(200);
  res.type('application/json');
  res.send(listings);
});

router.get('/devices', async (req, res, next) => {
  const controller = new DeviceController();
  const devices = await controller.getDevices();
  try {
    if (devices.length > 0) {
      res.status(200);
      res.type('application/json');
      res.send(devices);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
});

router.post('/devices', async (req, res, next) => {
  const controller = new DeviceController();
  try {
    const createdDevice = await controller.createDevice(req.body);
    if (createdDevice) {
      res.status(201);
      res.type('application/json');
      res.send(createdDevice);
    } else {
      next();
    }
  } catch(error) {
    next(error)
  }
});

router.get('/devices/:id', async (req, res, next) => {
  const controller = new DeviceController();
  try {
    const device = await controller.getDeviceBy(req.params.id);
    if (device) {
      res.status(200);
      res.type('application/json');
      res.send(device);
    } else {
      next();
    }
  } catch(error) {
    next(error);
  }
});

router.get('/records', async (req, res, next) => {
  const controller = new RecordController();
  try {
    const records = await controller.getRecords();
    if (records.length > 0) {
      res.status(200);
      res.type('application/json');
      res.send(records);
    } else {
      next();
    }
  } catch(error) {
    next(error);
  }
});

router.post('/records', async (req, res, next) => {
  const controller = new RecordController();
  try {
    const createdRecord = await controller.createRecord(req.body);
    if (createdRecord) {
      res.status(201);
      res.type('application/json');
      res.send(createdRecord);
    } else {
      next();
    }
  } catch(error) {
    next(error)
  }
});

export default router;
