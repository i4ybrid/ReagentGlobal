// Initializes the `make` service on path `/make`
const createService = require('feathers-mongodb');
const hooks = require('./make.hooks');
const filters = require('./make.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/make', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('make');

  mongoClient.then(db => {
    service.Model = db.collection('make');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
