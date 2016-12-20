"use strict";

switch (process.env.NODE_ENV) {

    case 'dev':
        module.exports = require('./dev.config');
        break;

    case 'test':
        module.exports = require('./test.config');
        break;

    default:
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
        break;
}
