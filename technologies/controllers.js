"use strict";

var queries = require('./queries');

var getTechnologies = function (req, res, next) {

    queries.getTechnologies()
        .then(function (data) {

            res.send(200, data);
            next();
        })
        .catch(function (data) {

            res.send(400, data);
            next();
        })
};

var addTechnology = function (req, res, next) {

    queries.addTechnology(req.body)
        .then(function (data) {

            res.send(201, data);
            next();
        })
        .catch(function (data) {

            res.send(400, data);
            next();
        })
};

var updateTechnology = function (req, res, next) {

    queries.updateTechnology(req.params[0], req.body)
        .then(function (data) {

            res.send(200, data);
            next();
        })
        .catch(function (data) {

            res.send(400, data);
            next();
        })
};

var deleteTechnology = function (req, res, next) {

    queries.deleteTechnology(req.params[0])
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
    getTechnologies: getTechnologies,
    addTechnology: addTechnology,
    updateTechnology: updateTechnology,
    deleteTechnology: deleteTechnology
};
