"use strict";

var Promise = require('bluebird');
var connection = require('../db');
var utils = require('../utils');

var getWorks = function () {

    var sql = "SELECT * FROM `works`";

    return new Promise(function (resolve, reject) {

        connection.query(sql, function (err, rows) {
            if (err) {
                reject(err)
            }

            resolve(utils.appendServerUrlToImages(rows, ['thumbnail', 'logo']));
        });
    });
};

var addWork = function (work) {

    var slug = utils.getSlug(work.title);
    var sql = "INSERT INTO `works` (`title`, `slug`, `description`, `short_description`, `url`, `languages`, `technologies`, `work_types`";
    sql += ") VALUES (";
    sql += "'" + work.title + "','" + slug + "','" + work.description + "','" + work.short_description + "',"
        + "'" + work.url + "','" + work.languages + "','" + work.technologies + "','" + work.work_types + "'";
    sql += ")";

    return new Promise(function (resolve, reject) {

        connection.query(sql, function (insertErr, insertRows) {
            if (insertErr) {
                reject('Mysql error');
            }

            connection.query("SELECT * FROM `works` WHERE `id`=" + insertRows.insertId, function (err, rows) {
                if (err) {
                    reject('Mysql error');
                }

                resolve(utils.appendServerUrlToImages(rows, ['image', 'thumbnail', 'logo']));
            });
        });
    });
};

var updateWork = function (id, work) {

    var slug = utils.getSlug(work.title);
    var sql = "UPDATE `works` SET ";
    for (var key in work) {
        if(work.hasOwnProperty(key)) {
            sql += "`" + key + "` = '" + work[key] + "' ,"
        }
    }
    sql += "`slug` = '" + slug + "' ";
    sql += "WHERE `id` = " + id;

    return new Promise(function (resolve, reject) {
        connection.query(sql, function (err, rows) {

            if (err) {
                reject('Mysql error')
            }

            return getWork(id);
        })
    });
};

var deleteWork = function (identifier) {

    var isId = /^\d+$/.test(identifier);
    var sql = "DELETE FROM `works` ";

    if (isId) {
        sql += "WHERE `id` = " + identifier;
    } else {
        sql += "WHERE `slug` = '" + identifier + "'";
    }

    return new Promise(function (resolve, reject) {

        connection.query(sql, function (err, rows) {

            if(err){
                reject('Mysql error');
            }


            if (isId) {
                resolve({
                    id: identifier
                });
            } else {
                resolve({
                    slug: identifier
                });
            }
        })
    })
};

var getWork = function (identifier) {

    var isId = /^\d+$/.test(identifier);

    var sql = "SELECT `w`.`id`, `w`.`title`, `w`.`description`, `w`.`image`, `w`.`logo`, `w`.`url`, ";
    sql += "GROUP_CONCAT(DISTINCT `wt`.`name` ORDER BY `wt`.`id`) AS `work_types`, "
        + "GROUP_CONCAT(DISTINCT `l`.`name` ORDER BY `l`.`id`) AS `languages`, "
        + "GROUP_CONCAT(DISTINCT `t`.`name` ORDER BY `t`.`id`) AS `technologies` "
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
    addWork: addWork,
    updateWork: updateWork,
    deleteWork: deleteWork,
    getWork: getWork
};
