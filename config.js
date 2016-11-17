"use strict";

if(process.env && process.env.NODE_ENV === 'dev') {

    module.exports = require('./omen.config');
} else {

    module.exports = {
        db: {
            host: '',
            user: '',
            password: '',
            database: ''
        },
        mongoDbUrl: '',
        serverUrl: ''
    };
}
