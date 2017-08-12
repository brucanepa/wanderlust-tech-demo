const mongoDbUtils = require('../utils/mongoDbUtils');
const Review = require('../entities/Review');

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

const addReview = (review) => {
  return new Promise((resolve, reject) => {
    const db = mongoDbUtils.get();
    const newReview = new Review(review);
    db.collection(collectionName)
      .updateOne({
        id: newReview.placeId
      }, {
        $push: {
          reviews: newReview
        }
      })
      .then(result => {
        resolve(!!result.modifiedCount && newReview.id);
      })
      .catch(err => {
        console.log(err);
        resolve();
      });
  });
};

module.exports = {
  get,
  addReview
};