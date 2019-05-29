import mongoose from 'mongoose';

import PersonSchema from '../common/db/mongoose/schema/PersonSchema';

const Person = mongoose.model('Person', PersonSchema);

export default Person;
