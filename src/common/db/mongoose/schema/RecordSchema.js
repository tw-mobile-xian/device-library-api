import { Schema } from 'mongoose';

import PersonSchema from './PersonSchema';
import DeviceSchema from './DeviceSchema';

const RecordSchema = new Schema({
  borrower: PersonSchema,
  devices: [DeviceSchema],
  date: Date,
  period: Number
});

export default RecordSchema;
