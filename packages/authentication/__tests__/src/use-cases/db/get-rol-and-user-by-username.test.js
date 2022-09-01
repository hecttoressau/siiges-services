// External dependencies
const { Logger } = require('@siiges-services/shared');
const { models } = require('@siiges-services/core');
// Internal dependencies
const getRolAndUserByUsername = require('../../../../src/use-cases/db/get-rol-and-user-by-username');
const { UserModelResponse } = require('../../../auxiliary-constants');

jest.mock('@siiges-services/core', () => ({
  models: {
    Usuario: {
      findOne: jest.fn(),
    },
  },
}));
Logger.error = jest.fn();
Logger.warn = jest.fn();

describe('Given a call to getRolAndUserByUsername', () => {
  describe("When the username doesn't exist", () => {
    test('THEN it should throw and error', async () => {
      try {
        models.Usuario.findOne.mockReturnValueOnce(null);
        await getRolAndUserByUsername(UserModelResponse.usuario);
      } catch (error) {
        expect(error.output.payload.message)
          .toMatch(`Unable to find username ${UserModelResponse.usuario} in our database`);
      }
    });
  });

  describe('When the username exist', () => {
    test('THEN it should return the username', async () => {
      models.Usuario.findOne.mockReturnValueOnce({ dataValues: UserModelResponse });
      const returnValue = await getRolAndUserByUsername(UserModelResponse.usuario);

      expect(returnValue).toBe(UserModelResponse);
    });
  });
});
