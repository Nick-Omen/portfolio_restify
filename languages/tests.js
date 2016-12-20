"use strict";

var hippie = require('hippie');
var config = require('../test.config');
var queries = require('./queries');

var languagesUrl = config.serverUrl + 'languages';

var successHandler = function (message) {
    console.log('Passed: ' + message);
};

module.exports = function (token) {

    queries.truncateTable();

    // Get languages
    hippie()
        .json()
        .url(languagesUrl)
        .method('GET')
        .expectStatus(200)
        .expectBody([])
        .end()
        .then(successHandler('[GET] /languages/ get all languages'))
        .catch(function (err) {
            if (err) throw err;
        });

    // Add language without authorization
    hippie()
        .json()
        .url(languagesUrl)
        .method('POST')
        .send({
            name: 'Test',
            skill_level: 100,
            experience: '01-01-2015'
        })
        .expectStatus(403)
        .expectValue('message', /[\w'.,]+/g)
        .end()
        .then(successHandler('[POST] /languages/ post language without authorization'))
        .catch(function (err) {
            if (err) throw err;
        });

    // Add language with authorization
    hippie()
        .json()
        .header('Authorization', 'Token: ' + token)
        .url(languagesUrl)
        .method('POST')
        .send({
            name: 'Test',
            skill_level: 100,
            experience: '01-01-2015'
        })
        .expectStatus(403)
        .end()
        .then(successHandler('[POST] /languages/ post language with authorization'))
        .catch(function (err) {
            if (err) throw err;
        });

    hippie()
        .json()
        .header('Authorization', 'Token: ' + token)
        .url(languagesUrl)
        .method('POST')
        .send({
            skill_level: 100
        })
        .expectStatus(403)
        .end()
        .then(successHandler('[POST] /languages/ post language missing fields'))
        .catch(function (err) {
            if (err) throw err;
        });

    hippie()
        .json()
        .header('Authorization', 'Token: ' + token)
        .url(languagesUrl + '/1')
        .method('PUT')
        .send({
            id: 1,
            name: 'Rename test',
            skill_level: 100,
            experience: '01-01-2016'
        })
        .expectStatus(200)
        .expectBody({
            id: 1,
            name: 'Rename test',
            skill_level: 100,
            experience: '01-01-2016'
        })
        .end()
        .then(successHandler('[PUT] /languages/ update language'))
        .catch(function (err) {
            if (err) throw err;
        });

    hippie()
        .json()
        .header('Authorization', 'Token: ' + token)
        .url(languagesUrl + '/1')
        .method('DELETE')
        .expectStatus(200)
        .end()
        .then(successHandler('[DELETE] /languages/ delete language'))
        .catch(function (err) {
            if (err) throw err;
        });

    console.log("Languages tests passed.");
};
