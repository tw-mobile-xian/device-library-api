import mongoose from 'mongoose';

import DeviceSchema from '../common/db/mongoose/schema/DeviceSchema';

const Device = mongoose.model('Device', DeviceSchema);

export default Device;
