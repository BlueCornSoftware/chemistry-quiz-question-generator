'use strict';

const guid = require('./lib/guid');

module.exports = value => ({
  id: guid(),
  ...value,
});
