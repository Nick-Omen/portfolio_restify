"use strict";

var config = require('../config');

module.exports = function (objs, keys) {

    var serverUrl = config.serverUrl;

    for (var i in objs) {
        if (objs.hasOwnProperty(i)) {
            var obj = objs[i];
            for (var key in obj) {
                if (obj.hasOwnProperty(key) && keys.indexOf(key) >= 0 && obj[key].length !== 0) {
                    objs[i][key] = serverUrl + obj[key];
                }
            }
        }
    }

    return objs;
};
