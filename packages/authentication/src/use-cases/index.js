const {
  getRolById,
  getRolAndUserByUsername,
  getUserByUsername,
} = require('./db');
const {
  isFrontPasswordRight,
  isUserPasswordRight,
} = require('./check-passwords');

module.exports = {
  getRolById,
  getRolAndUserByUsername,
  getUserByUsername,
  isFrontPasswordRight,
  isUserPasswordRight,
};
