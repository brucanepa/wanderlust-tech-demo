const DatabaseUsers = require('../3_database/usersDatabase');
const DatabaseAuth = require('../3_database/authDatabase');

const get = async ({userId, token}) => {
  const dbToken = await DatabaseAuth.getToken(userId);
  if (token === dbToken) return DatabaseUsers.get(userId);
  else return new Promise(resolve => resolve());
};

const addDestination = (userId, destination) => {
  return DatabaseUsers.addDestination(userId, destination);
};

const deleteDestination = (userId, destinationId) => {
  return DatabaseUsers.deleteDestination(userId, destinationId);
};

const swipeDestinationsOrder = (userId, destinationId, destinationsData) => {
  return new Promise(resolve => {
    destinationsData.id = destinationId;
    DatabaseUsers.swipeDestinationsOrder(userId, destinationsData)
      .then(result => resolve(result));
  });
};

module.exports = {
  get,
  addDestination,
  deleteDestination,
  swipeDestinationsOrder
};