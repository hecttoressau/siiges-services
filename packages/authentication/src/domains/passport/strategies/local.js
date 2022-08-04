// External dependencies
const { Strategy } = require('passport-local');
// Internal dependencies
const {
  signToken,
  isFrontPasswordRight,
} = require('../../../use-cases');

const LocalStrategy = new Strategy(
  (machine, password, done) => {
    if (isFrontPasswordRight(password)) {
      const token = signToken({
        machine,
        status: 'authorized',
      });

      return done(null, token);
    }

    throw Error('Password is incorrect');
  },
);

module.exports = LocalStrategy;
