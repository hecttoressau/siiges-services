// External dependencies
const { checkers } = require('@siiges-services/shared');
// Internal dependencies
const { frontAuth } = require('../../config');
const { hmacFront } = require('../adapters/crypto/front-hmac');
const hashString = require('../utilities/hash-string');

function isFrontPasswordRight(password) {
  if (checkers.isString(password)) {
    const hashedPassword = hashString(password, hmacFront);
    if (frontAuth.password === hashedPassword) {
      return true;
    }

    return false;
  }

  throw TypeError('"password" is not a string');
}

module.exports = isFrontPasswordRight;
