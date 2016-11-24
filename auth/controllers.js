"use strict";

var queries = require('./queries');

/**
 * @api {POST} /auth/signup/ Signup user
 * @apiName Sign Up
 * @apiGroup Auth
 *
 * @apiSuccess {}
 *
 * @apiError {}
 *
 * @apiVersion
 */
var signUp = function (req, res, next) {

    var username = req.body.username;
    var password = req.body.password;

    if (username && password) {

        queries.signUp(username, password)
            .then(function (data) {

                res.send(201, data);
                next();
            })
            .catch(function (data) {

                res.send(406, data);
            });
    } else {

        res.send(400, {
            message: 'Username and password required.'
        });
        next();
    }
};

/**
 * @api {POST} /auth/signin/
 * @apiName Sign In
 * @apiGroup Auth
 *
 * @apiSuccess {}
 *
 * @apiError {}
 *
 * @apiVersion
 */
var signIn = function (req, res, next) {

    var username = req.body.username;
    var password = req.body.password;

    if (username && password) {

        queries.signIn(username, password)
            .then(function (data) {
                res.send(200, data);
            })
    } else {

        res.send(400, {
            message: 'Username and password are invalid.'
        });
        next();
    }
};

var logOut = function (req, res, next) {

};

module.exports = {
    signUp: signUp,
    signIn: signIn,
    logOut: logOut
};