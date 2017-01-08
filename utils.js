"use strict";

var config = require('./config');
var slug = require('slug');
var fs = require('fs');
var moment = require('moment');
var path = require('path');

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

var idArrayToString = function (idArray) {

    if (typeof(parseInt(idArray, 10)) === 'number') {
        return idArray;
    }

    return idArray.join(',');
};

var isImage = function (type) {

    return /^image\/(png|jpe?g|gif)$/.test(type);
};

var getImageType = function (type) {

    return type.replace('image/', '');
};

var uploadImage = function (file, name) {

    if (!name) {
        name = '';
    }

    if (isImage(file.type) && fs.existsSync(file.path)) {

        var newFilename = moment().format('HHMMSS-DDMM')
            + (name ? '_' + name : '_image')
            + '.' + getImageType(file.type);

        console.log(file.path);
        fs.renameSync(file.path, path.resolve(__dirname, 'images', newFilename));

        return 'images/' + newFilename;
    }

    return '';
};

module.exports = {
    appendServerUrlToImages: appendServerUrlToImages,
    splitFields: splitFields,
    getSlug: getSlug,
    uploadImage: uploadImage,
    idArrayToString: idArrayToString
};
