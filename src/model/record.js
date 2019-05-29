import mongoose from 'mongoose';

import RecordSchema from '../common/db/mongoose/schema/RecordSchema';

const Record = mongoose.model('Record', RecordSchema);

export default Record;
