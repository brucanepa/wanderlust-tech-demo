const mongoDbUtils = require('../utils/mongoDbUtils');
const Review = require('../entities/Review');

const collectionName = 'places';

const get = (regionId) => {
  return new Promise((resolve, reject) => {
    regionId = parseInt(regionId);
    const db = mongoDbUtils.get();
    db.collection(collectionName)
      .find({ regionId: regionId })
      .toArray((err, places) => {
        if (err) resolve([]);
        resolve(places);
      })
  });
};

module.exports = {
  get
};