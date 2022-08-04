// External dependencies
const { dotenv } = require('@siiges-services/shared');

module.exports = {
  secret: dotenv.getEnvironmentVar('JWT_SECRET'),
  algorithm: dotenv.getEnvironmentVar('JWT_ALGORITHM'),
};
