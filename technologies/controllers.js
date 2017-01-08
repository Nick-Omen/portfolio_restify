"use strict";

var queries = require('./queries');

/**
 * @api {GET} /technologies/ Get technologies
 * @apiName Get Technologies
 * @apiGroup Technology
 *
 * @apiSuccess {Array} Technology[]
 *
 * @apiError {String} message Error message.
 *
 * @apiVersion 1.0.0
 */
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

/**
 * @api {POST} /technologies/ Add technology
 * @apiName Add Technology
 * @apiGroup Technology
 *
 * @apiSuccess {Array} Technology
 *
 * @apiError {String} message Error message.
 *
 * @apiVersion 1.0.0
 */
var addTechnology = function (req, res, next) {

    queries.addTechnology(req.body, req.files)
        .then(function (data) {

            res.send(201, data);
            next();
        })
        .catch(function (data) {

            res.send(400, data);
            next();
        })
};

/**
 * @api {PUT} /technologies/:id Update technology
 * @apiName Update Technology
 * @apiGroup Technology
 *
 * @apiParam {Number} id Language ID.
 *
 * @apiSuccess {Array} Technology
 *
 * @apiError {String} message Error message.
 *
 * @apiVersion 1.0.0
 */
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

/**
 * @api {DELETE} /technologies/:id Delete technology
 * @apiName Delete Technology
 * @apiGroup Technology
 *
 * @apiParam {Number} id Technology ID.
 *
 * @apiSuccess {Object} ID
 *
 * @apiError {String} message Error message.
 *
 * @apiVersion 1.0.0
 */
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
