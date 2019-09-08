// Initializes the `auth` service on path `/auth`
const createService = require('feathers-mongodb');
const hooks = require('./auth.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/auth', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('auth');

  mongoClient.then(db => {
    service.Model = db.collection('auth');
  });

  service.hooks(hooks);
};
