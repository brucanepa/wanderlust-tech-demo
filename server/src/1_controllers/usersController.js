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
    })
};

module.exports = (router) => {
  router.get('/', getUser);
  router.post('/destinations', postDestination);
  return router;
};