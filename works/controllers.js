"use strict";

var queries = require('./queries');

/**
 * @api {GET} /works/ Get works
 * @apiName Get Works
 * @apiGroup Work
 *
 * @apiSuccess {Array} Work[]
 *
 * @apiError {String} message Error message.
 *
 * @apiVersion 1.0.0
 */
var getWorks = function (req, res, next) {

    queries.getWorks()
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
 * @api {POST} /works/ Add work
 * @apiName Add Work
 * @apiGroup Work
 *
 * @apiSuccess {Object} Work
 *
 * @apiError {String} message Error message.
 *
 * @apiVersion 1.0.0
 */
var addWork = function (req, res, next) {

    queries.addWork(req.body)
        .then(function (data) {
            res.send(200, data[0]);
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
 * @api {PUT} /works/:identifier Modify work
 * @apiName Update Work
 * @apiGroup Work
 *
 * @apiParam {Mixed} identifier Work ID or slug
 *
 * @apiSuccess {Object} Work
 *
 * @apiError {String} message Error message.
 *
 * @apiVersion 1.0.0
 */
var updateWork = function (req, res, next) {

    queries.updateWork(req.params[0], req.body)
        .then(function (data) {
            res.send(200, data[0]);
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
 * @api {DELETE} /works/:identifier Delete work
 * @apiName Update Work
 * @apiGroup Work
 *
 * @apiParam {Mixed} identifier Work ID or slug
 *
 * @apiSuccess {Object} Work ID
 *
 * @apiError {String} message Error message.
 *
 * @apiVersion 1.0.0
 */
var deleteWork = function (req, res, next) {

    queries.deleteWork(req.params[0])
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
 * @api {GET} /works/:identifier Get work details
 * @apiName Get Work
 * @apiGroup Work
 *
 * @apiSuccess {Object} work Work
 *
 * @apiError {String} message Error message.
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
    addWork: addWork,
    updateWork: updateWork,
    deleteWork: deleteWork,
    getWork: getWork
};
