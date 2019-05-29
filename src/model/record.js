import mongoose from 'mongoose';

import { PersonSchema } from './person';
import { DeviceSchema } from './device';

const RecordSchema = new mongoose.Schema({
  borrower: PersonSchema,
  devices: [DeviceSchema],
  date: Date,
  period: Number
});

const Record = mongoose.model('Record', RecordSchema);

export default Record;
