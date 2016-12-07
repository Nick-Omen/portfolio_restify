"use strict";

var queries = require('./queries');

/**
 * @api {GET} /work-types/ Get work type
 * @apiName Get Work Types
 * @apiGroup Work Type
 *
 * @apiSuccess {Array} WorkType[]
 *
 * @apiError {String} message Error message.
 *
 * @apiVersion 1.0.0
 */
var getWorkTypes = function (req, res, next) {

    queries.getWorkTypes()
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

module.exports = {
    getWorkTypes: getWorkTypes
};
