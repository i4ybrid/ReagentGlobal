const app = require('../../src/app');

describe('\'flyer\' service', () => {
  it('registered the service', () => {
    const service = app.service('flyer');
    expect(service).toBeTruthy();
  });
});
