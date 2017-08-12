const authProvider = require('../2_providers/authProvider');

const numberChar = ':';
const publicUrls = {
  'continents': [{
    route: [],
    method: 'GET'
  }],
  'auth': [{
    route: ['signIn'],
    method: 'POST'
  }, {
    route: ['signOut'],
    method: 'POST'
  }],
  'places': [{
    route: [numberChar],
    method: 'GET'
  }],
  'placesDetail': [{
    route: [numberChar],
    method: 'GET'
  }]
};

const getHeadersValue = (req, name) => req.headers[`x-auth-${name.toLowerCase()}`];

const authenticate = (req, res, next) => {
  const userId = getHeadersValue(req, 'userId');
  const token = getHeadersValue(req, 'token');
  if (!userId || !token) res.customSend(undefined, 'invalid headers');
  else {
    authProvider.userIsLogged(userId, token)
      .then(isLogged => {
        if (!isLogged) res.customSend(undefined, 'not authenticated');
        else {
          req.authParameters = {
            userId,
            token
          };
          next();
        }
      });
  }
};

const authorize = (req, res, next) => {
  return new Promise((resolve, reject) => {
    const splittedUrl = req.splittedUrl;
    const url = publicUrls[splittedUrl[0]];
    if (url) {
      let stop = false;
      url.every(obj => {
        if (obj.route.length + 1 != splittedUrl.length || obj.method != req.requestMethod) return true;
        if (!obj.route.length) {
          stop = false;
          return stop;
        }
        let keepGoing = false;
        obj.route.every((param, index) => {
          const value = splittedUrl[index + 1];
          keepGoing = param == numberChar ? !isNaN(value) : value == param;
          return keepGoing;
        });
        stop = !keepGoing;
        return stop;
      });
      resolve(!stop ? next() : authenticate(req, res, next));
    } else {
      resolve(authenticate(req, res, next));
    }
  });
};

module.exports = authorize;
