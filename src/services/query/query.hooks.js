const logger = require('winston');

function testHook() {
  logger.info('test hook before get');
}

module.exports = {
  before: {
    all: [],
    find: [],
    get: [testHook],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
