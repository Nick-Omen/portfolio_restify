"use strict";

var mysql = require('mysql');
var config = require('./config');

var connection = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    multipleStatements: process.env.NODE_ENV === 'test'
});

connection.connect();

module.exports = connection;
