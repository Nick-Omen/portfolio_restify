"use strict";

var hippie = require('hippie');
var config = require('../test.config');
var queries = require('./queries');

var authUrl = config.serverUrl + 'auth/';

var successHandler = function (message) {
    console.log('Passed: ' + message);
};

module.exports = function () {

    queries.truncateTable();

    // Sign up
    var signUp = function () {
        return new Promise(function (resolve) {
            hippie()
                .json()
                .url(authUrl + 'signup')
                .method('POST')
                .send({
                    username: 'testuser',
                    password: 'testpass'
                })
                .expectStatus(201)
                .expectValue('userId', /\d+/g)
                .expectValue('username', 'testuser')
                .end()
                .then(function () {
                    successHandler('[POST] /signup/ valid username and password');
                    resolve(true);
                })
                .catch(function (err) {
                    if (err) console.trace(err);
                });
        })
    };

    signUp().then(function () {
        hippie()
            .json()
            .url(authUrl + 'signup')
            .method('POST')
            .send({
                username: 'testuser',
                password: ''
            })
            .expectStatus(400)
            .expectValue('message', /[\w'.,]+/g)
            .end()
            .then(successHandler('[POST] /signup/ password not set'))
            .catch(function (err) {
                if (err) console.trace(err);
            });

        hippie()
            .json()
            .url(authUrl + 'signup')
            .method('POST')
            .send({
                username: '',
                password: 'testpass'
            })
            .expectStatus(400)
            .expectValue('message', /[\w'.,]+/g)
            .end()
            .then(successHandler('[POST] /signup/ username not set'))
            .catch(function (err) {
                if (err) console.trace(err);
            });

        // Sign in
        hippie()
            .json()
            .url(authUrl + 'login')
            .method('POST')
            .send({
                username: 'testuser',
                password: 'testpass'
            })
            .expectStatus(200)
            .expectValue('username', 'testuser')
            .expectValue('token', /\w{32}/g)
            .end()
            .then(successHandler('[POST] /login/ valid username and password'))
            .catch(function (err) {
                if (err) console.trace(err);
            });

        hippie()
            .json()
            .url(authUrl + 'login')
            .method('POST')
            .send({
                username: 'not_valid',
                password: 'testpass'
            })
            .expectStatus(400)
            .expectValue('message', /[\w'.,]+/g)
            .end()
            .then(successHandler('[POST] /login/ username not valid'))
            .catch(function (err) {
                if (err) console.trace(err);
            });

        hippie()
            .json()
            .url(authUrl + 'login')
            .method('POST')
            .send({
                username: 'testuser',
                password: 'not_valid'
            })
            .expectStatus(400)
            .expectValue('message', /[\w'.,]+/g)
            .end()
            .then(successHandler('[POST] /login/ password not valid'))
            .catch(function (err) {
                if (err) console.trace(err);
            });

        // Logout
        hippie()
            .json()
            .url(authUrl + 'logout')
            .method('POST')
            .send({
                token: ''
            })
            .expectStatus(400)
            .expectValue('message', /[\w'.,]+/g)
            .end()
            .then(successHandler('[POST] /logout/ token not set'))
            .catch(function (err) {
                if (err) console.trace(err);
            });

        hippie()
            .json()
            .url(authUrl + 'logout')
            .method('POST')
            .send({
                token: 'token1here'
            })
            .expectStatus(400)
            .expectValue('message', /[\w'.,]+/g)
            .end()
            .then(successHandler('[POST] /logout/ token invalid'))
            .catch(function (err) {
                if (err) console.trace(err);
            });

        console.log('Auth tests passed.');
    });
};
