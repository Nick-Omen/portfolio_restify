"use strict";

var hippie = require('hippie');
var config = require('../test.config');
var queries = require('./queries');

var technologiesUrl = config.serverUrl + 'technologies';

var successHandler = function (message) {
    console.log('Passed: ' + message);
};

module.exports = function (token) {

    queries.truncateTable();

    // Get technologies
    hippie()
        .json()
        .url(technologiesUrl)
        .method('GET')
        .expectStatus(200)
        .expectBody([])
        .end()
        .then(successHandler('[GET] /technologies/ get all technologies'))
        .catch(function (err) {
            if (err) throw err;
        });

    // Add technology without authorization
    hippie()
        .json()
        .url(technologiesUrl)
        .method('POST')
        .send({
            name: 'Test',
            work_type_id: 1
        })
        .expectStatus(403)
        .expectValue('message', /[\w'.,]+/g)
        .end()
        .then(successHandler('[POST] /technologies/ post technologies without authorization'))
        .catch(function (err) {
            if (err) throw err;
        });

    // Add technology with authorization
    hippie()
        .json()
        .header('Authorization', 'Token: ' + token)
        .url(technologiesUrl)
        .method('POST')
        .send({
            name: 'Test',
            work_type_id: 1
        })
        .expectStatus(201)
        .expectBody({
            id: 1,
            name: 'Test',
            work_type_id: 1
        })
        .end()
        .then(successHandler('[POST] /technologies/ post technology with authorization'))
        .catch(function (err) {
            if (err) throw err;
        });

    hippie()
        .json()
        .header('Authorization', 'Token: ' + token)
        .url(technologiesUrl)
        .method('POST')
        .send({
            work_type_id: 1
        })
        .expectStatus(403)
        .end()
        .then(successHandler('[POST] /technologies/ post technology missing fields'))
        .catch(function (err) {
            if (err) throw err;
        });

    hippie()
        .json()
        .header('Authorization', 'Token: ' + token)
        .url(technologiesUrl + '/1')
        .method('PUT')
        .send({
            id: 1,
            name: 'Rename test',
            work_type_id: 2
        })
        .expectStatus(200)
        .expectBody({
            id: 1,
            name: 'Rename test',
            work_type_id: 2
        })
        .end()
        .then(successHandler('[PUT] /technologies/ update technology'))
        .catch(function (err) {
            if (err) throw err;
        });

    hippie()
        .json()
        .header('Authorization', 'Token: ' + token)
        .url(technologiesUrl + '/1')
        .method('DELETE')
        .expectStatus(200)
        .end()
        .then(successHandler('[DELETE] /technologies/ delete technology'))
        .catch(function (err) {
            if (err) throw err;
        });

    console.log("Technologies tests passed.");
};
