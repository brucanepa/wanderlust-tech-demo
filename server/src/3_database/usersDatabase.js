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
        resolve(!!result.modifiedCount && newDestination.id);
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
    db.collection(collectionName)
      .updateOne({
        id: userId
      }, {
        $pull: {
          destinations: {
            id: destinationId
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

const getSwipeQuery = (userId, id, order) => {
  return {
    'updateOne': {
      'filter': {
        id: userId,
        'destinations.id': id
      },
      'update': {
        $set: {
          'destinations.$.order': order
        }
      }
    }
  }
};

const swipeDestinationsOrder = (userId, destinationsData) => {
  return new Promise((resolve, reject) => {
    const db = mongoDbUtils.get();
    userId = parseInt(userId);
    destinationsData.order = parseInt(destinationsData.order);
    destinationsData.otherOrder = parseInt(destinationsData.otherOrder);
    db.collection(collectionName)
      .bulkWrite([
        getSwipeQuery(userId, destinationsData.id, destinationsData.otherOrder),
        getSwipeQuery(userId, destinationsData.otherId, destinationsData.order)
      ])
      .then(result => {
        resolve(result.modifiedCount == 2);
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
  deleteDestination,
  swipeDestinationsOrder
};