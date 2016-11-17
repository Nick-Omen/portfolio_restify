"use strict";

var queries = require('./queries');

/**
 * @api {get} /works/ Request works list.
 * @apiName Get Works
 * @apiGroup Work
 *
 * @apiSuccess {json} all works objects.
 *
 * @apiError {json} Unknown error
 *
 * @apiVersion 1.0.0
 */
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

/**
 * @api {get} /works/:identifier Request work by id or slug.
 * @apiName Get Works
 * @apiGroup Work
 *
 * @apiSuccess {json} all works objects.
 *
 * @apiError {json} Unknown error
 *
 * @apiVersion 1.0.0
 */
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
        })
        .error(function () {
            res.send(400, {
                message: "Unknown error"
            });
            next();
        });
};

module.exports = {
    getWorks: getWorks,
    getWork: getWork
};
