import { Schema } from 'mongoose';

import { TeamSchema } from './TeamSchema';

const PersonSchema = new Schema({
  name: String,
  email: String,
  team: TeamSchema
});

export default PersonSchema;
