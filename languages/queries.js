"use strict";

var Promise = require('bluebird');
var connection = require('../db');
var utils = require('../utils');
var moment = require('moment');

var getLanguages = function () {

    var sql = "SELECT * FROM `languages`";

    return new Promise(function (resolve, reject) {

        connection.query(sql, function (err, rows) {

            if (err) {
                reject('Mysql error.');
            }

            resolve(rows);
        })
    })
};

var addLanguage = function (language) {

    var lang_slug = utils.getSlug(language.name);
    var lang_experience = moment(new Date(language.experience));
    var sql = "INSERT INTO `languages` (`name`, `slug`, `skill_level`, `experience`) VALUES "
        + "('" + language.name + "','" + lang_slug + "',"
        + language.skill_level + ",'" + lang_experience.format('YYYY-MM-DD') + "')";

    return new Promise(function (resolve, reject) {

        connection.query(sql, function (err, rows) {

            if(err) {
                reject('Mysql error.');
            }

            resolve({
                id: rows.insertId,
                name: language.name,
                slug: lang_slug,
                skill_level: language.skill_level,
                experience: lang_experience.format('MM-DD-YYYY')
            })
        });
    })
};

var updateLanguage = function (id, language) {

    var lang_experience = moment(new Date(language.experience));

    var sql = "UPDATE `languages` SET "
        + "`name` = '" + language.name + "',"
        + "`slug` = '" + utils.getSlug(language.name) + "',"
        + "`skill_level` = '" + language.skill_level + "',"
        + "`experience` = '" + lang_experience.format('YYYY-MM-DD') + "'"
        + "WHERE `id` = " + id;

    return new Promise(function (resolve, reject) {
        connection.query(sql, function (err, rows) {

            if(err) {
                reject('Mysql error.')
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
                reject('Mysql error.');
            }

            resolve({
                id: id
            })
        })
    })

};

var truncateTable = function () {

    connection.query("TRUNCATE TABLE `languages`");
};

module.exports = {
    getLanguages: getLanguages,
    addLanguage: addLanguage,
    updateLanguage: updateLanguage,
    deleteLanguage: deleteLanguage,
    truncateTable: truncateTable
};
