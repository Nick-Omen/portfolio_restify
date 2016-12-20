"use strict";

var controllers = require('./controllers');
var validation = {
    title: {
        isRequired: true
    },
    description: {
        isRequired: true
    },
    short_description: {
        isRequired: true
    },
    url: {
        isRequired: true
    },
    languages: {
        isRequired: true
    },
    technologies: {
        isRequired: true
    },
    work_types: {
        isRequired: true
    }
};


module.exports = function (server) {

    server.get(/^\/works\/([\w_-]+)(|\/)$/, controllers.getWork);
    server.get(/^\/works(|\/)$/, controllers.getWorks);
    server.post({
        url: /^\/works(|\/)$/,
        validation: {
            content: validation
        }
    }, controllers.addWork);
    server.put({
        url: /^\/works\/([\w_-]+)(|\/)$/,
        validation: {
            content: validation
        }
    }, controllers.updateWork);
    server.del({
        url: /^\/works\/([\w_-]+)(|\/)$/
    }, controllers.deleteWork);
};
