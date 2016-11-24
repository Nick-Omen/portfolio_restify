"use strict";

var Promise = require('bluebird');
var connection = require('../db');
var utils = require('../utils');

var getLanguages = function () {

    var sql = "SELECT * FROM `languages`";

    return new Promise(function (resolve, reject) {

        connection.query(sql, function (err, rows) {

            if (err) {
                reject(err);
            }

            resolve(rows);
        })
    })
};

var addLanguage = function (language) {

    var sql = "INSERT INTO `languages` (`name`, `slug`, `skill_level`, `experience`) VALUES "
        + "('" + language.name + "','" + utils.getSlug(language.name) + "',"
        + language.skill_level + ",'" + new Date(language.experience).toISOString().split('T')[0] + "')";

    return new Promise(function (resolve, reject) {

        connection.query(sql, function (err, rows) {

            if(err) {
                reject('Mysql error');
            }

            resolve({
                id: rows.insertId
            })
        });
    })
};

var updateLanguage = function (id, language) {

    var sql = "UPDATE `languages` SET "
        + "`name` = '" + language.name + "',"
        + "`skill_level` = '" + language.skill_level + "',"
        + "`experience` = '" + new Date(language.experience).toISOString().split('T')[0] + "'"
        + "WHERE `id` = " + id;

    return new Promise(function (resolve, reject) {
        connection.query(sql, function (err, rows) {

            if(err) {
                reject('Mysql error')
            }

            connection.query("SELECT * FROM `languages` WHERE `id` = " + id + " LIMIT 1", function (err, rows) {

                if(err){
                    reject('Mysql error');
                }

                resolve(rows[0]);
            })
        })
    });
};

var deleteLanguage = function (id) {

    var sql = "DELETE FROM `languages` WHERE `id` = " + id;

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

module.exports = {
    getLanguages: getLanguages,
    addLanguage: addLanguage,
    updateLanguage: updateLanguage,
    deleteLanguage: deleteLanguage
};
