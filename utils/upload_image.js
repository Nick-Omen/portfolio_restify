"use strict";

var fs = require('fs');
var path = require('path');
var moment = require('moment');

var isImage = function (type) {

    return /^image\/(png|jpe?g|gif)$/.test(type);
};

var getImageType = function (type) {

    return type.replace('image/', '');
};

module.exports = function (file, name, filePath) {

    if (!name) {
        name = '';
    }

    if (!filePath) {
        filePath = '';
    }

    var imagePath = path.resolve(__dirname, '..', 'images', filePath);

    if(!fs.existsSync(imagePath)) {
        fs.mkdirSync(imagePath, '755');
    }

    if (isImage(file.type) && fs.existsSync(file.path)) {

        var newFilename = moment().format('HHMMSS-DDMM')
            + (name ? '_' + name : '_image')
            + '.' + getImageType(file.type);

        fs.renameSync(file.path, path.resolve(imagePath, newFilename));

        return path.join('images', filePath, newFilename);
    }

    return '';
};
