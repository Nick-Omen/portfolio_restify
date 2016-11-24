"use strict";

var Promise = require('bluebird');
var connection = require('../db');
var crypto = require('crypto');
var redis = require('../redis');

var getHashedPassword = function (password, salt) {

    return crypto.pbkdf2Sync(password, salt, 10000, 128, 'sha1').toString('hex').slice(1);
};

var generateToken = function () {

    return crypto.randomBytes(32).toString('hex').slice(0, 32);
};

var signUp = function (username, password) {

    var checkUserSql = "SELECT `username` FROM `users` "
        + "WHERE `username` = '" + username + "'";

    return new Promise(function (resolve, reject) {

        connection.query(checkUserSql, function (err, rows) {

            if (err) {
                console.log(err);
                reject('Mysql error');
            }

            if (!rows.length) {

                var salt = crypto.randomBytes(32).toString('hex');
                var hashedPassword = getHashedPassword(password, salt);

                var sql = "INSERT INTO `users` (`username`, `password`, `salt`) VALUES "
                    + "('" + username + "', '" + hashedPassword + "', '" + salt + "')";

                connection.query(sql, function (err, rows) {

                    if (err) {
                        console.log(err);
                        reject('Mysql error');
                    }

                    if (rows.affectedRows === 1 && rows.insertId) {
                        resolve({
                            userId: rows.insertId,
                            username: username
                        })
                    }
                });
            } else {

                reject({
                    message: 'User already exists.',
                    username: username
                });
            }
        });
    });
};

var signIn = function (username, password) {

    var getSaltSql = "SELECT `salt` FROM `users` "
        + "WHERE `username` = '" + username + "' LIMIT 1";

    return new Promise(function (resolve, reject) {

        connection.query(getSaltSql, function (err, rows) {

            if (err) {
                reject(err);
            }

            if (rows.length === 0) {

                resolve({
                    status: 'invalid',
                    message: 'User is not exists.'
                })
            } else {

                var salt = rows[0]['salt'];
                var hashedPassword = getHashedPassword(password, salt);

                var sql = "SELECT `username`, `email` FROM `users` "
                    + "WHERE `username` = '" + username + "' AND `password` = '" + hashedPassword + "' "
                    + "LIMIT 1";

                connection.query(sql, function (err, rows) {

                    if (err) {
                        reject(err);
                    }

                    if (rows.length === 0) {

                        resolve({
                            status: 'invalid',
                            message: 'Password not match.'
                        })
                    } else {

                        var token = generateToken();
                        redis.set(token, '{"status": 200, "date": "' + new Date() + '"}', function (err, res) {

                            if (res === 'OK') {
                                resolve({
                                    username: username,
                                    email: rows[0]['email'],
                                    token: token
                                })
                            } else {

                                reject({
                                    message: 'Generating token invalid'
                                });
                            }
                        });
                    }
                })
            }
        });
    });
};

var logOut = function (token) {

    var sql = "";

    return new Promise(function (resolve, reject) {

        connection.query(sql, function (err, rows) {

            if (err) {
                reject(err);
            }

            console.log(rows);
            resolve(rows);
        });
    });
};

module.exports = {
    signUp: signUp,
    signIn: signIn,
    logOut: logOut
};
