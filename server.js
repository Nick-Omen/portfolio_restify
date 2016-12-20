"use strict";

var restify = require('restify');
var redis = require('./redis');
var Promise = require('bluebird');
var moment = require('moment');
var restifyValidation = require('node-restify-validation');

var server = restify.createServer({
    name: "Portfolio"
});

var checkAuthorization = function (token) {

    return new Promise(function (resolve, reject) {

        redis.getAsync(token).then(function (res) {
            if (!res) {
                reject({
                    message: 'Session not found'
                });
            }
            res = JSON.parse(res);

            if (moment(new Date()) > moment(new Date(res.date))) {

                reject({
                    message: 'Session expired'
                })
            }

            resolve(true);
        });
    });
};

var sessionMiddleware = function (req, res, next) {

    if (req.method === 'GET' || req.url.indexOf('/auth/') !== -1) {

        return next();
    }

    if(req.headers.authorization) {
        var token = req.headers.authorization.split(' ')[1];

        checkAuthorization(token)
            .then(function () {
                return next();
            })
            .catch(function (data) {
                data.send(403, res);
            })
    }

    res.send(403, {
        message: "You haven't authorized."
    });
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
