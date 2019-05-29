import mongoose from 'mongoose';

export const PersonSchema = new mongoose.Schema({
  id: String,
  name: String,
  contact: String,
  team: String
});

const Person = mongoose.model('Person', PersonSchema);

export default Person;
