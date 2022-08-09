// Internal dependencies
const { isNotUndefined } = require('../checkers');
const Logger = require('../logger');

function validateWithDatatype({
  nameVar,
  valueVar,
  expectedDatatype,
}) {
  if (isNotUndefined(valueVar) && (typeof valueVar) === 'string') {
    return true;
  }

  Logger.error(`${nameVar} is not a ${expectedDatatype}`);
  throw TypeError(`${nameVar} is not a ${expectedDatatype}`);
}

module.exports = validateWithDatatype;
