// Internal dependencies
const Logger = require('../logger');

function validateWithFunction({
  nameVar,
  valueVar,
  validatorFn,
  expectedDatatype,
}) {
  if (validatorFn(valueVar)) {
    return true;
  }

  Logger.error(`${nameVar} is not a ${expectedDatatype}`);
  throw TypeError(`${nameVar} is not a ${expectedDatatype}`);
}

module.exports = validateWithFunction;
