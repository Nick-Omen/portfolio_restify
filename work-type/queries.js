"use strict";

var Promise = require('bluebird');
var connection = require('../db');

var getWorkTypes = function () {

    var sql = "SELECT * FROM `work_types`";

    return new Promise(function (resolve, reject) {

        connection.query(sql, function (err, rows) {
            if (err) {
                reject('Mysql error');
                return;
            }

            resolve(rows);
        });
    });
};


module.exports = {
    getWorkTypes: getWorkTypes
};
