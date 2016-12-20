"use strict";

var controllers = require('./controllers');

module.exports = function (server) {

    server.get(/^\/work-types(|\/)$/, controllers.getWorkTypes);
};
