"use strict";

var restify = require('restify');
var redis = require('./redis');
var Promise = require('bluebird');
var moment = require('moment');
var restifyValidation = require('node-restify-validation');
var path = require('path');
var fs = require('fs');

var server = restify.createServer({
    name: "Portfolio"
});

var bodyParserConfig = {
    maxBodySize: 0,
    mapParams: true,
    mapFiles: false,
    overrideParams: false,
    keepExtensions: true,
    uploadDir: path.resolve(__dirname, 'tmp'),
    multiples: true,
    hash: 'sha1'
};

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

    return next();

    if (req.method === 'GET' || req.url.indexOf('/auth/') !== -1) {

        return next();
    }

    if (req.headers.authorization) {
        var token = req.headers.authorization.split(' ')[1];

        checkAuthorization(token)
            .then(function () {
                return next();
            })
            .catch(function (data) {
                res.send(403, data);
            })
    }

    res.send(403, {
        message: "You haven't authorized."
    });
};

if (process.env.NODE_ENV === 'dev') {

    server
        .use(function (req, res, next) {

            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization');
            res.setHeader('Access-Control-Allow-Methods', '*');

            return next();
        })
        .use(function (req, res, next) {
            console.log("[%s] %s", req.method, req.getPath());
            return next();
        });
}

server
    .use(restify.queryParser())
    .use(restify.bodyParser(bodyParserConfig))
    .use(restify.fullResponse())
    .use(restifyValidation.validationPlugin({
        errorsAsArray: false,
        forbidUndefinedVariables: false
    }))
    .use(sessionMiddleware);

server.get(/\/images\/?.*/, restify.serveStatic({
    directory: __dirname
}));

server.get(/\/docs(|\/)$/, function (req, res, next) {
    res.redirect('/docs/index.html', next);
});

server.get(/\/docs\/?.*/, restify.serveStatic({
    directory: __dirname
}));

server.get(/\/images\/?.*/, restify.serveStatic({
    directory: __dirname
}));

module.exports = server;
