const Provider = require('../2_providers/placesProvider');

const get = (req, res) => {
  Provider
    .getAll(req.params.regionId)
    .then(data => {
      res.send(data);
    });
};

module.exports = (router) => {
  router.get('/:regionId', get);
  return router;
};