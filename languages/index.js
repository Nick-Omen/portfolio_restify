"use strict";

var controllers = require('./controllers');
var validation = {
    name: {
        isRequired: true
    },
    skill_level: {
        isRequired: true,
        isNumeric: true
    },
    experience: {
        isRequired: true,
        isDate: true
    }
};

module.exports = function (server) {

    server.get(/^\/languages(|\/)$/, controllers.getLanguages);
    server.post({
        url: /^\/languages(|\/)$/,
        validation: {
            content: validation
        }
    }, controllers.addLanguage);
    server.put({
        url: /^\/languages\/(\d+?)(|\/)$/,
        validation: {
            content: validation
        }
    }, controllers.updateLanguage);
    server.del({
        url: /^\/languages\/(\d+?)(|\/)$/
    }, controllers.deleteLanguage);
};
