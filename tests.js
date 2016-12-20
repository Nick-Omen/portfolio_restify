"use strict";

var authQueries = require('./auth/queries');

require('./index').then(function () {

    require('./auth/tests')();

    authQueries.signUp('nick', 'testpass')
        .then(function (data) {
            authQueries.signIn(data.username, 'testpass')
                .then(function (res) {
                    var token = res.token;
                    require('./languages/tests')(token);

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
