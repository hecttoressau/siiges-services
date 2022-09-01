// External dependencies
const { Logger } = require('@siiges-services/shared');
const { models } = require('@siiges-services/core');
// Internal dependencies
const getRolAndDescriptionById = require('../../../../src/use-cases/db/get-rol-by-id');
const {
  fakeBasicData,
  RolModelResponse,
} = require('../../../auxiliary-constants');

jest.mock('@siiges-services/core', () => ({
  models: {
    Rol: {
      findOne: jest.fn(),
    },
  },
}));
Logger.error = jest.fn();

const rolId = fakeBasicData.constant.number;

describe('Given a call to getRolByID', () => {
  describe("When the rol doesn't exist", () => {
    test('THEN it should return throw error', async () => {
      try {
        models.Rol.findOne.mockReturnValueOnce(null);
        await getRolAndDescriptionById(rolId);
      } catch (error) {
        expect(error.output.payload.message)
          .toMatch(`Unable to find rol with id ${rolId} in our database`);
      }
    });
  });

  describe('When the rol exist', () => {
    test('THEN it should return the username', async () => {
      models.Rol.findOne.mockReturnValueOnce({ dataValues: RolModelResponse });
      const returnValue = await getRolAndDescriptionById(rolId);

      expect(returnValue).toBe(RolModelResponse);
    });
  });
});
