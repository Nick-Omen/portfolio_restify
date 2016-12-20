"use strict";

var controllers = require('./controllers');
var validation = {
    username: {
        isRequired: true
    },
    password: {
        isRequired: true
    }
};

module.exports = function (server) {

    server.post({
        url: /^\/auth\/signup(|\/)$/,
        validation: {
            content: validation
        }
    }, controllers.signUp);
    server.post({
        url: /^\/auth\/login(|\/)$/,
        validation: {
            content: validation
        }
    }, controllers.signIn);
    server.post({
        url: /^\/auth\/logout(|\/)$/,
        validation: {
            content: {
                token: {
                    isRequired: true
                }
            }
        }

    }, controllers.logOut);
};
