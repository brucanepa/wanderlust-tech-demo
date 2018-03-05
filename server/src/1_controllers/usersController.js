const Provider = require('../2_providers/usersProvider');

const getUser = (req, res) => {
  Provider
    .get(req.authParameters)
    .then(data => {
      res.customSend(data);
    });
};

const postDestination = (req, res) => {
  Provider
    .addDestination(req.authParameters.userId, req.body)
    .then(data => {
      res.customSend(data);
    });
};

const deleteDestination = (req, res) => {
  Provider
    .deleteDestination(req.authParameters.userId, req.params.id)
    .then(data => {
      res.customSend(data);
    });
};

const swipeDestinationsOrder = (req, res) => {
  Provider
    .swipeDestinationsOrder(req.authParameters.userId, req.params.id, req.body)
    .then(data => {
      res.customSend(data);
    });
};

module.exports = (router) => {
  router.get('/', getUser);
  router.post('/destinations', postDestination);
  router.delete('/destinations/:id', deleteDestination);
  router.put('/destinations/:id', swipeDestinationsOrder);
  return router;
};