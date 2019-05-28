import mongoose from 'mongoose';

const LOCAL_MONGODB_URI = 'mongodb://127.0.0.1:27017/cxmobile'
const DB_NAME = 'cxmobile';

export default class MongooseDatabase {
  constructor() {
    const mongodbURI = process.env.MONGODB_URI || LOCAL_MONGODB_URI;
    mongoose.connect(mongodbURI, { useNewUrlParser: true });
    const conn = mongoose.connection;
    conn.on('error', console.error.bind(console, 'connection error:'));
    conn.once('open', () => {
      console.log("Connect to MongoDB: " + mongodbURI + ' successfully!')
    });
    this._conn = conn;
  }
}
