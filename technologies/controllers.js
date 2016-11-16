"use strict";

var queries = require('./queries');

var getWorkTypes = function (req, res, next) {

    queries
        .getWorkTypes()
        .then(function (data) {
            res.send(200, data);
            next();
        })
        .catch(function (data) {
            res.send(400, {
                message: 'Error.'
            });
            next();
        });
};

var getTechnologies = function (req, res, next) {

    queries
        .getTechnologies()
        .then(function (data) {
            res.send(200, data);
            next();
        })
        .catch(function (data) {
            res.send(400, {
                message: 'Error.'
            });
            next();
        });
};

module.exports = {
    getWorkTypes: getWorkTypes,
    getTechnologies: getTechnologies
};
