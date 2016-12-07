"use strict";

var queries = require('./queries');

/**
 * @api {GET} /languages/ Get languages
 * @apiName Get Languages
 * @apiGroup Language
 *
 * @apiSuccess {Array} Language[]
 *
 * @apiError {String} message Error message.
 *
 * @apiVersion 1.0.0
 */
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

/**
 * @api {POST} /languages/ Add language
 * @apiName Add Language
 * @apiGroup Language
 *
 * @apiSuccess {Object} Language
 *
 * @apiError {String} message Error message.
 *
 * @apiVersion 1.0.0
 */
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

/**
 * @api {PUT} /languages/:id Update language
 * @apiName Update Language
 * @apiGroup Language
 *
 * @apiParam {Number} id Language ID.
 *
 * @apiSuccess {Object} Language
 *
 * @apiError {String} message Error message.
 *
 * @apiVersion 1.0.0
 */
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

/**
 * @api {DELETE} /languages/:id Delete language
 * @apiName Delete Language
 * @apiGroup Language
 *
 * @apiParam {Number} id Language ID.
 *
 * @apiSuccess {Object} ID
 *
 * @apiError {String} message Error message.
 *
 * @apiVersion 1.0.0
 */
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
