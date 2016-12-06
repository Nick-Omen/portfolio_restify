"use strict";

var db = require('./db');
var server = require('./server');
var works = require('./works');
var technologies = require('./technologies');
var languages = require('./languages');
var workTypes = require('./work-type');
var auth = require('./auth');

// Works
var worksValidation = {
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
server.get(/^\/works\/([\w_-]+)(|\/)$/, works.getWork);
server.get(/^\/works(|\/)$/, works.getWorks);
server.post({
    url: /^\/works(|\/)$/,
    validation: {
        content: worksValidation
    }
}, works.addWork);
server.put({
    url: /^\/works\/([\w_-]+)(|\/)$/,
    validation: {
        content: worksValidation
    }
}, works.updateWork);
server.del({
    url: /^\/works\/([\w_-]+)(|\/)$/
}, works.deleteWork);

// Work types
server.get(/^\/work-types(|\/)$/, workTypes.getWorkTypes);

// Technologies
var technologiesValidation = {
    name: {
        isRequired: true
    },
    work_type: {
        isRequired: true
    }
};
server.get(/^\/technologies(|\/)$/, technologies.getTechnologies);
server.post({
    url: /^\/technologies(|\/)$/,
    validation: {
        content: technologiesValidation
    }
}, technologies.addTechnology);
server.put({
    url: /^\/technologies\/(\d+?)(|\/)$/,
    validation: {
        content: technologiesValidation
    }
}, technologies.updateTechnology);
server.del({
    url: /^\/technologies\/(\d+?)(|\/)$/
}, technologies.deleteTechnology);

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
