"use strict";

var queries = require('./queries');

var getLanguages = function (req, res, next) {

    queries.getLanguages()
        .then(function (data) {

            res.send(200, data);
            next();
        })
        .catch(function (data) {

            res.send(400, data);
            next();
        })
};

var addLanguage = function (req, res, next) {

    queries.addLanguage(req.body)
        .then(function (data) {

            res.send(201, data);
            next();
        })
        .catch(function (data) {

            res.send(400, data);
            next();
        })
};

var updateLanguage = function (req, res, next) {

    queries.updateLanguage(req.params[0], req.body)
        .then(function (data) {

            res.send(200, data);
            next();
        })
        .catch(function (data) {

            res.send(400, data);
            next();
        })
};

var deleteLanguage = function (req, res, next) {

    queries.deleteLanguage(req.params[0])
        .then(function (data) {

            res.send(200, data);
            next();
        })
        .catch(function (data) {

            res.send(400, data);
            next();
        })
};

module.exports = {
    getLanguages: getLanguages,
    addLanguage: addLanguage,
    updateLanguage: updateLanguage,
    deleteLanguage: deleteLanguage
};
