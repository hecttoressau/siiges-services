// Internal dependencies
const validateWithFunction = require('./validate-with-function');

function bulkValidation(validations) {
  for (let i = 0; i < validations.length; i += 1) {
    validateWithFunction(validations[i]);
  }
}

module.exports = bulkValidation;
