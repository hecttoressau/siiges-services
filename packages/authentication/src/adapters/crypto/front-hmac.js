// External dependencies
const { createHmac } = require('crypto');
const { frontAuth } = require('../../../config');

module.exports = {
  hmacFront: createHmac(
    frontAuth.algorithm,
    frontAuth.salt,
  ),
};
