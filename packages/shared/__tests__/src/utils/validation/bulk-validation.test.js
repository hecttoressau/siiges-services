const { fakeData, validateArgumentsObject } = require('../../../auxiliary-constants');
const validations = require('../../../../src/utils/validation');

const validate = jest.spyOn(validations, 'validate');

const validationsList = [];
for (let i = 0; i < fakeData.numberMax20; i += 1) {
  validateArgumentsObject.validatorFn = jest.fn().mockReturnValue(true);
  validationsList.push(validateArgumentsObject);
}

describe('GIVEN a call to bulkValidations', () => {
  describe('WHEN all the validations pass', () => {
    test(`THEN bulkValidation should have called\
    validate ${fakeData.numberMax20} times`, () => {
      validations.bulkValidations(validationsList);
      expect(validate).toHaveBeenCalledTimes(fakeData.numberMax20);
    });
  });
});
