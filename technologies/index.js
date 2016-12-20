"use strict";

var controllers = require('./controllers');
var validation = {
    name: {
        isRequired: true
    },
    work_type: {
        isRequired: true
    }
};

module.exports = function (server) {

    server.get(/^\/technologies(|\/)$/, controllers.getTechnologies);
    server.post({
        url: /^\/technologies(|\/)$/,
        validation: {
            content: validation
        }
    }, controllers.addTechnology);
    server.put({
        url: /^\/technologies\/(\d+?)(|\/)$/,
        validation: {
            content: validation
        }
    }, controllers.updateTechnology);
    server.del({
        url: /^\/technologies\/(\d+?)(|\/)$/
    }, controllers.deleteTechnology);
};
