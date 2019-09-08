const app = require('../../src/app');

describe('\'mailing-list\' service', () => {
  it('registered the service', () => {
    const service = app.service('mailing-list');
    expect(service).toBeTruthy();
  });
});
