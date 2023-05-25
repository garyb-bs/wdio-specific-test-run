var defaults = require("./wdio.conf.js");
var _ = require("lodash");

var overrides = {
  specs: [
    '../../src/test/test.spec.js'
  ]
};

exports.config = _.defaultsDeep(overrides, defaults.config);
