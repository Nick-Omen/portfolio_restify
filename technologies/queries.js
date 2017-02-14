"use strict";

var Promise = require('bluebird');
var connection = require('../db');
var utils = require('../utils');
var fs = require('fs');

var getTechnologies = function () {

    var sql = "SELECT `T`.`id`, `T`.`name`, `T`.`slug`, `T`.`image`, `T`.`work_type_id`, "
        + "`WT`.`name` AS `work_type_name`, `WT`.`slug` AS `work_type_slug` FROM `technologies` AS `T`"
        + "JOIN `work_types` AS `WT` ON `WT`.`id` = `T`.`work_type_id` "
        + "GROUP BY `T`.`id`";

    return new Promise(function (resolve, reject) {

        connection.query(sql, function (err, rows) {

            if (err) {
                reject(err);
            }

            resolve(rows);
        })
    })
};

var addTechnology = function (technology, files) {

    var imageUrl = '';
    var techSlug = utils.getSlug(technology.name);
    var sql = "INSERT INTO `technologies` (`name`, `slug`, `work_type_id`, `image`";
    sql += ") VALUES ("
        + "'" + technology.name + "','" + techSlug + "',"
        + technology.work_type_id;
    console.log(files);
    if (files && files.image) {

        imageUrl = utils.uploadImage(files.image, 'technology');
    }
    sql += ",'" + imageUrl + "'";
    sql += ")";

    return new Promise(function (resolve, reject) {

        connection.query(sql, function (err, rows) {

            if(err) {
                reject('Mysql error.');
            }

            resolve({
                id: rows.insertId,
                name: technology.name,
                slug: techSlug,
                work_type_id: technology.work_type_id,
                image: imageUrl
            })
        });
    })
};

var updateTechnology = function (id, technology) {

    var sql = "UPDATE `technologies` SET ";
    sql += "`name` = '" + technology.name + "',"
        + "`slug` = '" + utils.getSlug(technology.name) + "', "
        + "`work_type_id` = " + technology.work_type_id;
    sql += " WHERE `id` = " + id;

    return new Promise(function (resolve, reject) {
        connection.query(sql, function (err, rows) {

            if(err) {
                reject('Mysql error')
            }

            connection.query("SELECT * FROM `technologies` WHERE `id` = " + id + " LIMIT 1", function (err, rows) {

                if(err){
                    reject('Mysql error');
                }

                resolve(rows[0]);
            })
        })
    });
};

var deleteTechnology = function (id) {

    var sql = "DELETE FROM `technologies` WHERE `id` = " + id;

    return new Promise(function (resolve, reject) {

        connection.query(sql, function (err, rows) {

            if(err){
                reject('Mysql error');
            }

            resolve({
                id: id
            })
        })
    })
};

var truncateTable = function () {

    connection.query("TRUNCATE TABLE `technologies`");
};

module.exports = {
    getTechnologies: getTechnologies,
    addTechnology: addTechnology,
    updateTechnology: updateTechnology,
    deleteTechnology: deleteTechnology,
    truncateTable: truncateTable
};
