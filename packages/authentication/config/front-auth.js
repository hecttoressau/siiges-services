const { dotenv } = require('@siiges-services/shared');

module.exports = {
  algorithm: dotenv.getEnvironmentVar('FRONT_HASH_ALGORITHM'),
  password: dotenv.getEnvironmentVar('FRONT_PASSWORD'),
  salt: dotenv.getEnvironmentVar('FRONT_SALT'),
};
