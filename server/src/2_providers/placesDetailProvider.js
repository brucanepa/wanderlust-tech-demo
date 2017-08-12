const Database = require('../3_database/placesDetailDatabase');

const get = (placeId) => {
  return Database.get(placeId);
};

const addReview = (userId, review) => {
  return new Promise((resolve, reject) => {
    if (userId != review.userId) resolve('invalid userId');
    else resolve(Database.addReview(review));
  })
}

module.exports = {
  get,
  addReview
};