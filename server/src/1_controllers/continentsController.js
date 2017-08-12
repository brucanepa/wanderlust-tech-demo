const Provider = require('../2_providers/continentsProvider');

const get = (req, res) => {
  Provider
    .getAll()
    .then(data => {
      res.send(data);
    });
};

module.exports = (router) => {
  router.get('/', get);
  return router;
};