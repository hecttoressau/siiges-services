// External dependencies
const { validate } = require('@siiges-services/shared');
// Internal dependencies
const { frontAuth } = require('../../config');
const {
  hmac,
  getUserEncryptAlgorithm,
  encryptString,
} = require('../drivers/crypto');

function isPasswordRight(inputPassword, correctPassword) {
  if (inputPassword === correctPassword) {
    return true;
  }
  return false;
}

function isUserPasswordRight(passwordFromRequest, userObjectFromDb) {
  validate({
    nameVar: 'passwordFromRequest',
    valueVar: passwordFromRequest,
    expectedDatatype: 'string',
  });
  validate({
    nameVar: 'userObjectFromDb.passwordUpdated',
    valueVar: userObjectFromDb.passwordUpdated,
    expectedDatatype: 'string',
  });
  validate({
    nameVar: 'userObjectFromDb.password',
    valueVar: userObjectFromDb.password,
    expectedDatatype: 'string',
  });

  const encryptAlgorithm = getUserEncryptAlgorithm(userObjectFromDb.passwordUpdated);
  const encryptPassword = encryptString(
    passwordFromRequest,
    encryptAlgorithm,
  );

  return isPasswordRight(encryptPassword, userObjectFromDb.password);
}

function isFrontPasswordRight(password) {
  validate({
    nameVar: 'password',
    valueVar: password,
    expectedDatatype: 'string',
  });

  const hmacPassword = encryptString(password, hmac);
  return isPasswordRight(hmacPassword, frontAuth.password);
}

module.exports = {
  isFrontPasswordRight,
  isUserPasswordRight,
};
