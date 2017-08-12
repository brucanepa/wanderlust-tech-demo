const authorizeMiddleware = require('./authorizeMiddleware');

// overrides response.send
const customSend = (req, res, next) => {
  res.customSend = (data, message) => {
    res.send({
      result: !!data ? 'success' : 'error',
      data,
      message: message
    });
  };
  next();
};

// splits url, so we can authorize requests
const splitUrl = (req, res, next) => {
  return new Promise((resolve, reject) => {
    req.splittedUrl =req.originalUrl.substring(1).split('/')
    resolve(next());
  });
};

const requestMethod = (req, res, next) => {
  return new Promise((resolve, reject) => {
    req.requestMethod = req.headers['access-control-request-method'];
    resolve(next());
  })
};

module.exports = {
  customSend,
  splitUrl,
  requestMethod,
  authorizeMiddleware
};