import mongoose from 'mongoose';

export const DeviceSchema = new mongoose.Schema({
  id: String,
  name: String,
  screen: String,
  platform: String,
  version: String,
  storage: String
}, { _id: false });

const Device = mongoose.model('Device', DeviceSchema);

export default Device;

export const DEVICE_STATUS = {
  AVAILABLE: "AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE"
};
