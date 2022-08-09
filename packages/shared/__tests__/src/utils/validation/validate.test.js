const { validateArgumentsObject } = require('../../../auxiliary-constants');
const validateWithFunction = require('../../../../src/utils/validation/validate-with-function');

describe('GIVEN a call to validate function', () => {
  describe('WHEN the argument datatype is the expected', () => {
    test('THEN should return true', () => {
      validateArgumentsObject.validatorFn
        .mockReturnValue(true);

      expect(validateWithFunction(validateArgumentsObject)).toBe(true);
    });
  });

  describe('WHEN the argument is not the datatype expected', () => {
    test('THEN we should receive a TypeError constructor', () => {
      validateArgumentsObject.validatorFn
        .mockReturnValue(false);

      expect(() => validateWithFunction(validateArgumentsObject))
        .toThrow(TypeError);
    });

    test('THEN we should receive a error message', () => {
      validateArgumentsObject.validatorFn
        .mockReturnValue(false);

      expect(() => validateWithFunction(validateArgumentsObject))
        .toThrow(`${validateArgumentsObject.nameVar} is not a ${validateArgumentsObject.expectedDatatype}`);
    });
  });
});
