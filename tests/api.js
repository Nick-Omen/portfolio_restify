"use strict";

var authQueries = require('../auth/queries');
var connection = require('../db');
var fs = require('fs');

module.exports = function () {
    console.log('api tests start');

    fs.readFile('./dump.sql', {encoding: 'utf8', flag: 'r'}, function (err, data) {

        if(err){
            console.trace(err);
        }

        connection.query(data, function (err, rows) {
            if(err){
                console.trace(err);
            }

            require('../index').then(function () {

                require('../auth/tests')();

                authQueries.signUp('nick', 'testpass')
                    .then(function (data) {
                        authQueries.signIn(data.username, 'testpass')
                            .then(function (res) {
                                var token = res.token;
                                require('../languages/tests')(token);
                                require('../technologies/tests')(token);
                                require('../work-type/tests')();
                                require('../works/tests')(token);

                                console.log('api tests end');
                                process.exit(0);
                            })
                            .catch(function (err) {
                                if (err) throw err;
                            });
                    })
                    .catch(function () {
                        throw new Error("Server wasn't start for some reason")
                    })
            });
        });
    });
};
