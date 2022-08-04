// External dependencies
const jwt = require('jsonwebtoken');
const { Logger } = require('@siiges-services/shared');

// Internal dependencies
const { jwtParams } = require('../../config');

function verifyToken(token) {
  try {
    jwt.verify(
      token,
      jwtParams.secret,
      { algorithms: jwtParams.algorithm },
    );
  } catch (error) {
    Logger.error(`Invalid token \nerror: ${error}`);
  }
}

module.exports = verifyToken;
