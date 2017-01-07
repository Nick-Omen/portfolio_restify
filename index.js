"use strict";

var db = require('./db');
var server = require('./server');
var Promise = require('bluebird');

// Works
require('./works')(server);

// Work types
require('./work-type')(server);

// Technologies
require('./technologies')(server);

// Languages
require('./languages')(server);

// Users
require('./auth')(server);

/**
 * Not allowed function.
 */
var notAllowed = function (req, res, next) {
    res.send(403, 'Not allowed.');
    next();
};

var optionsRoute = function(req, res, next) {
    res.send(200);
    next();
};

server.opts(/.*/, optionsRoute);
server.get(/.*/, notAllowed);
server.post(/.*/, notAllowed);
server.put(/.*/, notAllowed);
server.head(/.*/, notAllowed);

if(process.env && process.env.NODE_ENV === 'test') {

    module.exports = new Promise(function (resolve, reject) {

        server.listen(3003, function () {
            console.log('%s listening at %s', server.name, server.url);
            resolve(server);
        });
    })

} else {
    server.listen(3000, function () {
        console.log('%s listening at %s', server.name, server.url);
    });
}
