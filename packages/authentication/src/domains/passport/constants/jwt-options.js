// External dependencies
const { ExtractJwt } = require('passport-jwt');
// Internal dependencies
const { jwtParams } = require('../../../../config');

const jwtOptions = {
  jwtSecret: jwtParams.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
};

module.exports = {
  jwtOptions,
};
