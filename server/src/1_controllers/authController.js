const Provider = require('../2_providers/authProvider');

const signIn = (req, res) => {
  Provider
    .signIn(req.body)
    .then(data => {
      res.customSend(data);
    });
};

const signOut = (req, res) => {
  Provider
    .signOut(req.authParameters.userId)
    .then(data => {
      res.send(data);
    });
};

module.exports = (router) => {
  router.post('', signIn);
  router.delete('', signOut);
  return router;
};