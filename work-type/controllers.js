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
var getWorkTypes = function (req, res, next) {

    queries
        .getWorkTypes()
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
