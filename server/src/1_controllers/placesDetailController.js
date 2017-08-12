const Provider = require('../2_providers/placesDetailProvider');

const get = (req, res) => {
  Provider
    .get(req.params.placeId)
    .then(data => {
      res.send(data);
    });
};

module.exports = (router) => {
  router.get('/:placeId', get);
  return router;
};