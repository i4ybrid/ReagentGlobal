const auth = require('./auth/auth.service.js');
const listing = require('./listing/listing.service.js');
const make = require('./make/make.service.js');
const user = require('./user/user.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(auth);
  app.configure(make);
  app.configure(user);
  app.configure(listing);
};
