"use strict";

var queries = require('./queries');

/**
 * @api {get} /work-types/ Get all work types
 * @apiName Get Work Types
 * @apiGroup WorkType
 *
 * @apiSuccess {json} List of work types
 *
 * @apiError {json} Error message
 *
 * @apiVersion 1.0.0
 */
var getWorkTypes = function (req, res, next) {

    queries
        .getWorkTypes()
        .then(function (data) {
            res.send(200, data);
            next();
        })
        .catch(function () {
            res.send(400, {
                message: 'Error.'
            });
            next();
        });
};


/**
 * @api {get} /technologies/ Get all technologies
 * @apiName Get Technologies
 * @apiGroup Technology
 *
 * @apiSuccess {json} List of technologies
 *
 * @apiError {json} Error message
 *
 * @apiVersion 1.0.0
 */
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
