const Database = require('../3_database/authDatabase');

const signIn = async (userData) => {
  const {username, password} = userData;
  if (!username || !password) return {};

  const user = await Database.getUser(username);

  if (!user) return {};
  if (user.password !== password) return {};

  const token = await Database.insertToken(user.id);
  user.token = token;

  delete user.password;

  return user;
};

const userIsLogged = async (userId) => {
  const session = await Database.getToken(userId);
  return !!session;
};

const signOut = async (userId) => {
  return Database.signOut(userId);
};

module.exports = {
  signIn,
  userIsLogged,
  signOut
};