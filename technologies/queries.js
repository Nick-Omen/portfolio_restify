"use strict";

var Promise = require('bluebird');
var connection = require('../db');
var utils = require('../utils');

var getWorkTypes = function () {

    return new Promise(function (resolve, reject) {

        var sql = "SELECT `wt`.`type`, `wt`.`slug`, GROUP_CONCAT(DISTINCT `t`.`tech`) AS `tech` "
            + "FROM `technologies` AS `t` "
            + "LEFT JOIN `work_types` AS `wt` ON FIND_IN_SET(`wt`.`id`, `t`.`work_type`) "
            + "GROUP BY `wt`.`type`";

        connection
            .query(sql, function (err, rows) {
                if (err) {
                    console.log(err);
                    reject(err);
                }

                resolve(utils.splitFields(rows, ['tech']));
            });
    });
};

var getTechnologies = function () {

    return new Promise(function (resolve, reject) {

        var sql = "SELECT `tech` AS `name`, `slug` FROM `technologies`";

        connection
            .query(sql, function (err, rows) {
                if (err) {
                    console.log(err);
                    reject(err);
                }

                resolve(utils.splitFields(rows, ['tech']));
            });
    });
};

module.exports = {
    getWorkTypes: getWorkTypes,
    getTechnologies: getTechnologies
};
