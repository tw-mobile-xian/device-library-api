import mongoose from 'mongoose';

import { PersonSchema } from '../common/db/mongoose/schema';

const Person = mongoose.model('Person', PersonSchema);

export default Person;
