import mongoose from 'mongoose';

import TeamSchema from '../common/db/mongoose/schema/TeamSchema';

const Team = mongoose.model('Team', TeamSchema);

export default Team;
