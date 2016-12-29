"use strict";

var hippie = require('hippie');
var config = require('../test.config');
var queries = require('./queries');

var worksUrl = config.serverUrl + 'works';

var successHandler = function (message) {
    console.log('Passed: ' + message);
};

module.exports = function (token) {

    queries.truncateTable();

    // Get works
    hippie()
        .json()
        .url(worksUrl)
        .method('GET')
        .expectStatus(200)
        .expectBody([])
        .end()
        .then(successHandler('[GET] /works/ get all works'))
        .catch(function (err) {
            if (err) throw err;
        });

    // Add work without authorization
    hippie()
        .json()
        .url(worksUrl)
        .method('POST')
        .send({
            title: 'Test title',
            description: 'test description',
            short_description: 'test short description',
            url: 'http://te.st/',
            languages: '',
            technologies: '',
            work_types: ''
        })
        .expectStatus(403)
        .expectValue('message', /[\w'.,]+/g)
        .end()
        .then(successHandler('[POST] /works/ post work without authorization'))
        .catch(function (err) {
            if (err) throw err;
        });

    // Add work with authorization
    hippie()
        .json()
        .header('Authorization', 'Token: ' + token)
        .url(worksUrl)
        .method('POST')
        .send({
            title: 'Test title',
            description: 'test description',
            short_description: 'test short description',
            url: 'http://te.st/',
            languages: '',
            technologies: '',
            work_types: ''
        })
        .expectStatus(201)
        .expectBody({
            id: 1,
            title: 'Test title',
            description: 'test description',
            short_description: 'test short description',
            url: 'http://te.st/',
            languages: '',
            technologies: '',
            work_types: ''
        })
        .end()
        .then(successHandler('[POST] /works/ post work with authorization'))
        .catch(function (err) {
            if (err) throw err;
        });

    hippie()
        .json()
        .header('Authorization', 'Token: ' + token)
        .url(worksUrl)
        .method('POST')
        .send({
            short_description: 'test short description',
            languages: '',
            work_types: ''
        })
        .expectStatus(403)
        .end()
        .then(successHandler('[POST] /works/ post work missing fields'))
        .catch(function (err) {
            if (err) throw err;
        });

    hippie()
        .json()
        .header('Authorization', 'Token: ' + token)
        .url(worksUrl + '/1')
        .method('PUT')
        .send({
            id: 1,
            title: 'Renamed title',
            description: 'Changed description',
            short_description: 'test short description',
            url: 'http://te.st/',
            languages: '',
            technologies: '',
            work_types: ''
        })
        .expectStatus(200)
        .expectBody({
            id: 1,
            title: 'Renamed title',
            description: 'Changed description',
            short_description: 'test short description',
            url: 'http://te.st/',
            languages: '',
            technologies: '',
            work_types: ''
        })
        .end()
        .then(successHandler('[PUT] /works/ update work'))
        .catch(function (err) {
            if (err) throw err;
        });

    hippie()
        .json()
        .header('Authorization', 'Token: ' + token)
        .url(worksUrl + '/1')
        .method('DELETE')
        .expectStatus(200)
        .end()
        .then(successHandler('[DELETE] /works/ delete work'))
        .catch(function (err) {
            if (err) throw err;
        });

    console.log('Works tests passed.');
};
