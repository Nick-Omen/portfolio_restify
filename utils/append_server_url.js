"use strict";

var config = require('../config');

/**
 * Append url string taken from config to image fields.
 * @param instances - Array of objects from DB.
 * @param keys - Keys where to prepend server url.
 * @return {Array|*}
 */
module.exports = function (instances, keys) {

    var serverUrl = config.serverUrl;

    if(typeof(instances) === 'string' && keys === true) {
        return serverUrl + instances;
    }

    if (typeof(keys) === 'string') {
        return instances.map(function (instance) {
            if (instance.hasOwnProperty(keys)) {
                var newField = {};
                newField[keys] = serverUrl + instance[keys];
                return Object.assign({}, instance, newField)
            }
            return instance;
        });
    }

    return instances.map(function (instance) {
        var newFields = {};
        for (var key in instance) {
            if (instance.hasOwnProperty(key) && keys.indexOf(key) !== -1) {
                newFields[key] = serverUrl + instance[key];
            }
        }
        return Object.assign({}, instance, newFields);
    });
};
