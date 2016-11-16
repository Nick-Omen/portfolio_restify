"use strict";

var queries = require('./queries');


var getWorks = function (req, res, next) {

    queries
        .getWorks()
        .then(function (data) {
            res.send(200, data);
            next();
        })
        .error(function () {
            res.send(400, {
                message: "Unknown error"
            });
            next();
        });
};

var getWork = function (req, res, next) {

    var identifier = req.params[0];

    queries
        .getWork(identifier)
        .then(function (data) {

            if (data.length === 1) {

                res.send(200, data[0]);
            } else {

                res.send(404);
            }
            next();
        });
};

module.exports = {
    getWorks: getWorks,
    getWork: getWork
};
