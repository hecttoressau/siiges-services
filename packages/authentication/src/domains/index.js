// External dependencies
const passport = require('passport');
// Internal dependencies
const strategies = require('./passport/strategies');

passport.use(strategies.Jwt);
passport.use(strategies.Local);

module.export = passport;
