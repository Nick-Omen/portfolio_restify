"use strict";

var server = require('./server');
var config = require('./config');
var slug = require('slug');

var appendServerUrlToImages = function (objs, keys) {

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

var splitFields = function (objs, keys) {

    for (var n in keys) {
        if (keys.hasOwnProperty(n)) {
            var key = keys[n];
            for (var i in objs) {
                if (objs.hasOwnProperty(i) && objs[i][key]) {
                    objs[i][key] = objs[i][key].split(',');
                }
            }
        }
    }

    return objs;
};

var getSlug = function (string) {
    return slug(string, {lowercase: true});
};

module.exports = {
    appendServerUrlToImages: appendServerUrlToImages,
    splitFields: splitFields,
    getSlug: getSlug
};
