const Database = require('../3_database/placesDetailDatabase');

const get = (placeId) => {
  return Database.get(placeId); 
};

module.exports = {
  get
};