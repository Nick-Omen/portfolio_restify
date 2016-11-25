"use strict";

var db = require('./db');
var server = require('./server');
var works = require('./works');
var technologies = require('./technologies');
var languages = require('./languages');
var auth = require('./auth');

// Works
server.get(/^\/works\/([\w_-]+)(|\/)$/, works.getWork);
server.get(/^\/works(|\/)$/, works.getWorks);

// Technologies
server.get(/^\/work-types(|\/)$/, technologies.getWorkTypes);
server.get(/^\/technologies(|\/)$/, technologies.getTechnologies);

// Languages
var languagesValidation = {
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
server.get(/^\/languages(|\/)$/, languages.getLanguages);
server.post({
    url: /^\/languages(|\/)$/,
    validation: {
        content: languagesValidation
    }
}, languages.addLanguage);
server.put({
    url: /^\/languages\/(\d+?)(|\/)$/,
    validation: {
        content: languagesValidation
    }
}, languages.updateLanguage);
server.del({
    url: /^\/languages\/(\d+?)(|\/)$/
}, languages.deleteLanguage);

// Users
var userValidation = {
    username: {
        isRequired: true
    },
    password: {
        isRequired: true
    }
};
server.post({
    url: /^\/auth\/signup(|\/)$/,
    validation: {
        content: userValidation
    }
}, auth.signUp);
server.post({
    url: /^\/auth\/login(|\/)$/,
    validation: {
        content: userValidation
    }
}, auth.signIn);
server.post({
    url: /^\/auth\/logout(|\/)$/,
    validation: {
        content: {
            token: {
                isRequired: true
            }
        }
    }

}, auth.logOut);

/**
 * Not allowed function.
 */
var notAllowed = function (req, res, next) {
    res.send(403, 'Not allowed.');
    next();
};

server.get(/.*/, notAllowed);
server.post(/.*/, notAllowed);
server.put(/.*/, notAllowed);
server.head(/.*/, notAllowed);

server.listen(3000, function () {
    console.log('%s listening at %s', server.name, server.url);
});
