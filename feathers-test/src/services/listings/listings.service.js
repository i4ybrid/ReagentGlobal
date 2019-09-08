// Initializes the `listings` service on path `/listings`
const createService = require('feathers-mongodb');
const hooks = require('./listings.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/listings', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('listings');

  mongoClient.then(db => {
    service.Model = db.collection('listings');
  });

  service.hooks(hooks);
};
