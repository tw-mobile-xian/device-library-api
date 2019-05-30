import mongoose from 'mongoose';

import { PersonSchema } from './person';

const RecordSchema = new mongoose.Schema({
  type: String,
  borrower: PersonSchema,
  deviceIDs: [String],
  date: Date,
  period: Number
});

const Record = mongoose.model('Record', RecordSchema);

export default Record;

export const RECORD_TYPE = {
  BORROW: "borrow",
  RETURN: "return"
}
