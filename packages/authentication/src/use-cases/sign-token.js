// External dependencies
const jwt = require('jsonwebtoken');

// Internal dependencies
const { jwtParams } = require('../../config');

function signToken(informationObj) {
  const token = jwt.sign(
    informationObj,
    jwtParams.secret,
    { algorithm: jwtParams.algorithm },
  );

  return token;
}

module.exports = signToken;
