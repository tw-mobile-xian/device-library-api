import mongoose from 'mongoose';

const DB_NAME = 'cxmobile';
const LOCAL_MONGODB_URI = 'mongodb://127.0.0.1:27017/' + DB_NAME;

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

  save(model) {
    const handler = (resolve, reject) => model.save((err, document) => err ? reject(err) : resolve(document));
    return new Promise(handler);
  }

  find(model, query) {
    const handler = (resolve, reject) => model.find(query, (err, document) => err ? reject(err) : resolve(document));
    return new Promise(handler);
  }
}
