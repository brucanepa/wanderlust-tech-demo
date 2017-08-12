const mongoDbUtils = require('../utils/mongoDbUtils');
const Destination = require('../entities/Destination');

const collectionName = 'users';

const get = (userId) => {
  return new Promise((resolve, reject) => {
    const db = mongoDbUtils.get();
    userId = parseInt(userId);
    db.collection(collectionName)
      .findOne({
        id: userId
      }, {
        password: false
      })
      .then(user => {
        resolve(user);
      })
  });
};

const addDestination = (userId, destination) => {
  return new Promise((resolve, reject) => {
    const db = mongoDbUtils.get();
    const newDestination = new Destination(destination);
    userId = parseInt(userId);
    db.collection(collectionName)
      .updateOne({
        id: userId
      }, {
        $push: {
          destinations: newDestination
        }
      })
      .then(result => {
        resolve(!!result.modifiedCount);
      })
      .catch(err => {
        console.log(err);
        resolve();
      });
  });
};

const deleteDestination = (userId, destinationId) => {
  return new Promise((resolve, reject) => {
    const db = mongoDbUtils.get();
    userId = parseInt(userId);
    destinationId = parseInt(destinationId);
    db.collection(collectionName)
      .updateOne({
        id: userId
      }, {
        $pull: {
          destinations: {
            order: destinationId
          }
        }
      })
      .then(result => {
        resolve(!!result.modifiedCount);
      })
      .catch(err => {
        console.log(err);
        resolve();
      });
  });
};

module.exports = {
  get,
  addDestination,
  deleteDestination
};