const Database = require('../3_database/placesDatabase');

const getAll = (regionId) => {
  return Database.get(regionId);
};

module.exports = {
  getAll
};