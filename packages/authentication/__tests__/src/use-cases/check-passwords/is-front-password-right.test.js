// External
const { Logger, validate } = require('@siiges-services/shared');
// Internal dependencies
const { encryptString } = require('../../../../src/drivers/crypto');
const {
  fakeBasicData,
} = require('../../../auxiliary-constants');

const originalEnv = { ...process.env };
process.env.AUTH_FRONT_PASSWORD = fakeBasicData.constant.string;
const { isFrontPasswordRight } = require('../../../../src/use-cases');

jest.mock('../../../../src/drivers/crypto', () => ({
  encryptString: jest.fn(),
}));
jest.mock('@siiges-services/shared', () => {
  const originalModule = jest.requireActual('@siiges-services/shared');
  return {
    ...originalModule,
    validate: jest.fn(),
  };
});

Logger.warn = jest.fn();
Logger.info = jest.fn();

describe('Given a call to isUserPasswordRight function', () => {
  afterEach(() => {
    process.env = {
      ...originalEnv,
    };
  });

  test('THEN it should call validate', () => {
    isFrontPasswordRight();
    expect(validate).toHaveBeenCalled();
  });

  test('THEN stringToHash should have been called', () => {
    isFrontPasswordRight();
    expect(encryptString).toHaveBeenCalled();
  });

  describe('When the password is correct', () => {
    test('THEN it should return true', () => {
      encryptString.mockReturnValueOnce(fakeBasicData.constant.string);
      const returnValue = isFrontPasswordRight(fakeBasicData.constant.string);

      expect(returnValue).toBe(true);
    });
  });

  describe('When the password is incorrect', () => {
    test('THEN it should return false', () => {
      encryptString.mockReturnValue(fakeBasicData.changing.string());
      const returnValue = isFrontPasswordRight(fakeBasicData.changing.string());

      expect(returnValue).toBe(false);
    });
  });
});
