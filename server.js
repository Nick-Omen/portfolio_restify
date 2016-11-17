"use strict";

var restify = require('restify');

var server = restify.createServer({
    name: "Portfolio"
});

var sessionMiddleware = function (req, res, next) {
    return next();
};

if(process.env && process.env.NODE_ENV === 'dev') {

    var allowCors = function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    };
    server.use(allowCors);
}

server
    .use(sessionMiddleware)
    .use(restify.fullResponse())
    .use(restify.bodyParser())
    .use(restify.queryParser());

server.get(/\/images\/?.*/, restify.serveStatic({
    directory: __dirname
}));

module.exports = server;
