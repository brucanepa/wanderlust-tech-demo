const mongoDbUtils = require('../utils/mongoDbUtils');

const usersCollectionName = 'users';
const sessionCollectionName = 'sessions';

const getUser = (username) => {
  return new Promise((resolve, reject) => {
    const db = mongoDbUtils.get();
    db.collection(usersCollectionName)
      .findOne({
        email: username
      })
      .then(user => {
        if (!user) return {};
        resolve(user);
      })
  });
};

const insertToken = (userId) => {
  return new Promise((resolve, reject) => {
    const db = mongoDbUtils.get();
    const token = Math.random().toString();
    db.collection(sessionCollectionName)
      .updateOne({
        userId: userId
      }, {
        $set: {
          session: token
        }
      }, {
        upsert: true
      }
    )
      .then(result => {
        resolve(token);
      })
      .catch(err => {
        console.log(err);
        resolve();
      })
  })
};

const getToken = (userId) => {
  return new Promise((resolve, reject) => {
    const db = mongoDbUtils.get();
    userId = parseInt(userId);
    db.collection(sessionCollectionName)
      .findOne({
        userId
      }, {
        _id: false,
        session: true
      })
      .then(result => {
        resolve(result && result.session);
      });
  })
};

const signOut = (userId) => {
  return new Promise((resolve, reject) => {
    const db = mongoDbUtils.get();
    userId = parseInt(userId);
    db.collection(sessionCollectionName)
      .deleteOne({
        userId
      })
      .then(result => {
        resolve(!!result.deletedCount);
      });
  })
};

module.exports = {
  getUser,
  insertToken,
  getToken,
  signOut
};