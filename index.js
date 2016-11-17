"use strict";

var db = require('./db');
var server = require('./server');
var works = require('./works');
var technologies = require('./technologies');
var users = require('./users');

// Works
server.get(/^\/works\/([\w_-]+)(|\/)$/, works.getWork);
server.get(/^\/works(|\/)$/, works.getWorks);

// Technologies
server.get(/^\/work-types(|\/)$/, technologies.getWorkTypes);
server.get(/^\/technologies(|\/)$/, technologies.getTechnologies);

// Users
server.post(/^\/auth\/signup(|\/)$/, users.signUp);
server.post(/^\/auth\/signin(|\/)$/, users.signIn);
server.post(/^\/auth\/logout(|\/)$/, users.logOut);

/**
 * Not allowed function.
 */
var notAllowed = function (req, res, next) {
    res.send(403, 'Not allowed.');
    next();
};

server.get(/.*/, notAllowed);
server.post(/.*/, notAllowed);
server.put(/.*/, notAllowed);
server.head(/.*/, notAllowed);

server.listen(3000, function () {
    console.log('%s listening at %s', server.name, server.url);
});
