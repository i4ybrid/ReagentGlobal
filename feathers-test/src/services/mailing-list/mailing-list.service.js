// Initializes the `mailing-list` service on path `/mailing-list`
const createService = require('feathers-mongodb');
const hooks = require('./mailing-list.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/mailing-list', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('mailing-list');

  mongoClient.then(db => {
    service.Model = db.collection('mailing-list');
  });

  service.hooks(hooks);
};
