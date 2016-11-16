"use strict";

var restify = require('restify');

var server = restify.createServer({
    name: "Portfolio"
});

var sessionMiddleware = function (req, res, next) {
    console.log(req.session);
    return next();
};

var corsMiddleware = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
};

server
    .use(sessionMiddleware)
    .use(corsMiddleware)
    .use(restify.fullResponse())
    .use(restify.bodyParser())
    .use(restify.queryParser());

server.get(/\/images\/?.*/, restify.serveStatic({
    directory: __dirname
}));

module.exports = server;
