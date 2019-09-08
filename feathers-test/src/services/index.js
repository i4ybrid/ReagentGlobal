const auth = require('./auth/auth.service.js');
const mailingList = require('./mailing-list/mailing-list.service.js');
const listings = require('./listings/listings.service.js');
const flyer = require('./flyer/flyer.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(auth);
  app.configure(mailingList);
  app.configure(listings);
  app.configure(flyer);
};
