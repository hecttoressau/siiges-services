// External dependencies
const { faker } = require('@faker-js/faker');

const fakeData = {
  string: faker.datatype.string(),
  number: faker.datatype.number(),
  UNDEFINED: undefined,
  bool: faker.datatype.boolean(),
  techWord: faker.hacker.ingverb(),
  datatype: faker.helpers.objectKey(faker.datatype),
  numberMax20: faker.datatype.number({ max: 20 }),
};

const nodeEnv = {
  DEV: 'development',
  PROD: 'production',
  FAKE: faker.word.noun(),
  UNDEFINED: undefined,
};

const validateArgumentsObject = {
  nameVar: fakeData.techWord,
  valueVar: fakeData.string,
  validatorFn: jest.fn(),
  expectedDatatype: fakeData.datatype,
};

module.exports = {
  fakeData,
  nodeEnv,
  validateArgumentsObject,
};
