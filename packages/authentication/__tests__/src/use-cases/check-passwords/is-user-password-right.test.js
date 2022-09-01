// External dependnecies
const { Logger, validate } = require('@siiges-services/shared');
// Internal dependencies
const { UserModelResponse, fakeBasicData } = require('../../../auxiliary-constants');
const checkPasswords = require('../../../../src/use-cases/check-passwords');
const {
  encryptString,
  getUserEncryptAlgorithm,
} = require('../../../../src/drivers/crypto');

jest.mock('@siiges-services/shared', () => {
  const originalModule = jest.requireActual('@siiges-services/shared');
  return {
    ...originalModule,
    validate: jest.fn(),
  };
});
jest.mock('../../../../src/drivers/crypto', () => {
  const originalModule = jest.requireActual('../../../../src/drivers/crypto');
  return {
    ...originalModule,
    getUserEncryptAlgorithm: jest.fn(),
    encryptString: jest.fn(),
  };
});

Logger.info = jest.fn();
Logger.warn = jest.fn();
const { password } = UserModelResponse;

describe('Given a call to isUserPasswordRight function', () => {
  test('THEN it should call validate two times', () => {
    checkPasswords.isUserPasswordRight(password, UserModelResponse);
    expect(validate).toHaveBeenCalled();
  });

  test('THEN stringToHash should have been called', () => {
    checkPasswords.isUserPasswordRight(password, UserModelResponse);
    expect(encryptString).toHaveBeenCalled();
  });

  test('THENT it should call getUserEncryptAlgorithm', () => {
    checkPasswords.isUserPasswordRight(password, UserModelResponse);
    expect(getUserEncryptAlgorithm).toHaveBeenCalled();
  });

  describe("When password doesn't match", () => {
    test('THEN it should return false', () => {
      const incorrectPassword = fakeBasicData.constant.string;
      encryptString.mockReturnValueOnce(fakeBasicData.constant.string);
      const returnValue = checkPasswords.isUserPasswordRight(
        incorrectPassword,
        UserModelResponse,
      );

      expect(returnValue).toBe(false);
    });
  });

  describe('When passwords match', () => {
    test('THEN it should return true', () => {
      encryptString.mockReturnValueOnce(UserModelResponse.password);
      const returnValue = checkPasswords.isUserPasswordRight(password, UserModelResponse);

      expect(returnValue).toBe(true);
    });
  });
});
