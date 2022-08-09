// External dependencies
const { checkers, validations } = require('@siiges-services/shared');
// Internal dependencies
const { frontAuth } = require('../../config');
const { hmacFront } = require('../adapters/crypto/front-hmac');
const hashString = require('../utilities/hash-string');

function isFrontPasswordRight(password) {
  validations.validate({
    nameVar: 'password',
    valueVar: password,
    validatorFn: checkers.isString,
    expectedDatatype: String,
  });

  const hashedPassword = hashString(password, hmacFront);
  if (frontAuth.password === hashedPassword) {
    return true;
  }
  return false;
}

module.exports = isFrontPasswordRight;
