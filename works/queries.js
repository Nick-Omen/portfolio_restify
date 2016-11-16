"use strict";

var Promise = require('bluebird');
var connection = require('../db');
var utils = require('../utils');

var getWorks = function () {

    var sql = "SELECT `w`.`id`, `w`.`slug`, `w`.`title`, `w`.`short_description`, `w`.`thumbnail`, `w`.`logo`, "
        + "GROUP_CONCAT(DISTINCT `wt`.`type` ORDER BY `wt`.`id`) AS `work_types`, "
        + "GROUP_CONCAT(DISTINCT `l`.`lang` ORDER BY `l`.`id`) AS `languages`, "
        + "GROUP_CONCAT(DISTINCT `t`.`tech` ORDER BY `t`.`id`) AS `technologies` "
        + "FROM `works` AS `w` "
        + "JOIN `work_types` AS `wt` ON  FIND_IN_SET(`wt`.`id`, `w`.`work_types`) "
        + "JOIN `languages` AS `l` ON  FIND_IN_SET(`l`.`id`, `w`.`languages`) "
        + "JOIN `technologies` AS `t` ON  FIND_IN_SET(`t`.`id`, `w`.`technologies`) "
        + "GROUP BY `w`.`id`";

    return new Promise(function (resolve, reject) {

        connection.query(sql, function (err, rows) {
            if (err) {
                reject(err)
            }

            rows = utils.splitFields(rows, ['work_types', 'languages', 'technologies']);
            resolve(utils.appendServerUrlToImages(rows, ['thumbnail', 'logo']));
        });
    });
};

var getWork = function (identifier) {

    var isId = /^\d+$/.test(identifier);

    var sql = "SELECT `w`.`id`, `w`.`title`, `w`.`description`, `w`.`image`, `w`.`logo`, `w`.`url`, ";
    sql += "GROUP_CONCAT(DISTINCT `wt`.`type` ORDER BY `wt`.`id`) AS `work_types`, "
        + "GROUP_CONCAT(DISTINCT `l`.`lang` ORDER BY `l`.`id`) AS `languages`, "
        + "GROUP_CONCAT(DISTINCT `t`.`tech` ORDER BY `t`.`id`) AS `technologies` "
        + " FROM `works` AS `w` "
        + "JOIN `work_types` AS `wt` ON  find_in_set(`wt`.`id`, `w`.`work_types`) "
        + "JOIN `languages` AS `l` ON  find_in_set(`l`.`id`, `w`.`languages`) "
        + "JOIN `technologies` AS `t` ON  find_in_set(`t`.`id`, `w`.`technologies`) ";

    if (isId) {
        sql += "WHERE `w`.`id` = " + identifier + " GROUP BY `w`.`id` LIMIT 1";
    } else {
        sql += "WHERE `w`.`slug` = '" + identifier + "' GROUP BY `w`.`id` LIMIT 1";
    }

    return new Promise(function (resolve, reject) {

        connection.query(sql, function (err, rows) {
            if (err) {
                reject(err)
            }

            rows = utils.splitFields(rows, ['work_types', 'languages', 'technologies']);
            resolve(utils.appendServerUrlToImages(rows, ['image', 'logo']));
        });
    });
};

module.exports = {
    getWorks: getWorks,
    getWork: getWork
};
