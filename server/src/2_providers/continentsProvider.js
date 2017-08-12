const Database = require('../3_database/continentsDatabase');

const getAll = () => {
  return Database.getAll();
};

module.exports = {
  getAll
};