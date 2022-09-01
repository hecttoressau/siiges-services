// Internal dependencies
const getUserByUsername = require('./get-user-by-username');
const getRolById = require('./get-rol-by-id');
const getRolAndUserByUsername = require('./get-rol-and-user-by-username');

module.exports = {
  getRolById,
  getRolAndUserByUsername,
  getUserByUsername,
};
