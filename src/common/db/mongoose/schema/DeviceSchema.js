import { Schema } from 'mongoose';

const DeviceSchema = new Schema({
  name: String,
  screen: String,
  platform: String,
  version: String,
  storage: String,
});

export default DeviceSchema;
