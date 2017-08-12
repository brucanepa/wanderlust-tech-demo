const MongoClient = require('mongodb').MongoClient;
const config = require('../../config');

let mongoDb = null;

const connect = (url) => {
  MongoClient.connect(url || config.database, function(err, db) {
    if (err) console.log(err);
    mongoDb = db;
  })
};

const get = () => mongoDb;

const close = () => {
  if (mongoDb) mongoDb.close();
  mongoDb = null;
};

module.exports = {
  connect,
  get,
  close
};