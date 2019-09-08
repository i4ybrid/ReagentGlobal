// Initializes the `flyer` service on path `/flyer`
const createService = require('feathers-mongodb');
const hooks = require('./flyer.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/flyer', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('flyer');

  mongoClient.then(db => {
    service.Model = db.collection('flyer');
  });

  service.hooks(hooks);
};
