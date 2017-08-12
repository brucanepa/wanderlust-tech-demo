const Provider = require('../2_providers/placesDetailProvider');

const get = (req, res) => {
  Provider
    .get(req.params.placeId)
    .then(data => {
      res.send(data);
    });
};

const addReview = (req, res) => {
  Provider
    .addReview(req.authParameters.userId, req.body)
    .then(data => {
      res.customSend(data);
    });
};

module.exports = (router) => {
  router.get('/:placeId', get);
  router.post('/review', addReview);
  return router;
};