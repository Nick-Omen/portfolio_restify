"use strict";

var restify = require('restify');
var redis = require('./redis');
var restifyValidation = require('node-restify-validation');

var server = restify.createServer({
    name: "Portfolio"
});

var checkAuthorization = function (token) {

    redis.get(token, function (err, reply) {
        return !err && reply === 'ok';
    });

    return false;
};

var sessionMiddleware = function (req, res, next) {

    return next();
    if (req.headers.authorization && req.method !== 'GET' && req.url.indexOf('/auth/') === -1) {
        var authSession = checkAuthorization(req.headers.authorization.split(' ')[1]);
        if (authSession) {

            return next();
        } else {
            res.send(403, {
                message: 'Method not allowed for unauthorized users'
            });
            return next();
        }
    }
    return next();
};

if (process.env && process.env.NODE_ENV === 'dev') {

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
    .use(restify.queryParser())
    .use(restifyValidation.validationPlugin({
        errorsAsArray: false,
        forbidUndefinedVariables: false
    }));

server.get(/\/images\/?.*/, restify.serveStatic({
    directory: __dirname
}));

server.get(/\/docs(|\/)$/, function (req, res, next) {
    res.redirect('/docs/index.html', next);
});

server.get(/\/docs\/?.*/, restify.serveStatic({
    directory: __dirname
}));

module.exports = server;
