"use strict";

var hippie = require('hippie');
var config = require('../test.config');

module.exports = function () {

    hippie()
        .json()
        .url(config.serverUrl + 'work-types')
        .method('GET')
        .expectStatus(200)
        .expectBody([
            {id: 1, name: "Front-end", slug: "front-end"},
            {id: 2, name: "Back-end", slug: "back-end"},
            {id: 3, name: "Testing", slug: "testing"},
            {id: 4, name: "UI/UX", slug: "ui-ux"}
        ])
        .end()
        .catch(function (err) {
            if (err) throw err;
        });

    console.log('Work Type tests passed.');
};
