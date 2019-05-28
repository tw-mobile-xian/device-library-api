import { Schema } from 'mongoose';

const DeviceSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  os: String
});

export default DeviceSchema;
