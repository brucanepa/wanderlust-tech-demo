const mongoDbUtils = require('../utils/mongoDbUtils');

const collectionName = 'placesDetail';

const get = (placeId) => {
  return new Promise((resolve, reject) => {
    placeId = parseInt(placeId);
    const db = mongoDbUtils.get();
    db.collection(collectionName)
      .findOne({
        id: placeId
      })
      .then(detail => {
        if (!detail) resolve({});
        resolve(detail);
      });
  });
};

module.exports = {
  get
};