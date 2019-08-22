import mongoose from 'mongoose';

const DB_NAME = 'cxmobile';
const LOCAL_MONGODB_URI = 'mongodb://127.0.0.1:27017/' + DB_NAME;

export default class MongooseDatabase {
  constructor() {
    mongoose.set('useFindAndModify', false);
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

  update(model, document) {
    const handler = (resolve, reject) => model.findByIdAndUpdate(document._id, document, { new: true }, (err, document) => err ? reject(err) : resolve(document));
    return new Promise(handler);
  }

  delete(model, query) {
    const handler = (resolve, reject) => model.findOneAndDelete(query, (err, document) => err ? reject(err) : resolve(document));
    return new Promise(handler);
  }
}
