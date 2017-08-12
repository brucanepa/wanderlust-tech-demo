const mongoDbUtils = require('../utils/mongoDbUtils');

const collectionName = 'continents';

const getAll = () => {
  return new Promise((resolve, reject) => {
    const db = mongoDbUtils.get();
    db.collection(collectionName)
      .find()
      .toArray((err, continents) => {
        if (err) resolve([]);
        resolve(continents);
      })
  });
};

module.exports = {
  getAll
};