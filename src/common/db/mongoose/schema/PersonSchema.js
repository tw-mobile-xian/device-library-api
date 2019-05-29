import { Schema } from 'mongoose';

const PersonSchema = new Schema({
  id: String,
  name: String,
  contact: String,
  team: String
});

export default PersonSchema;
