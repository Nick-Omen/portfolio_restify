"use strict";

var fs = require('fs');
var moment = require('moment');

var isImage = function (type) {

    return /^image\/(png|jpe?g|gif)$/.test(type);
};

var getImageType = function (type) {

    return type.replace('image/', '');
};

module.exports = function (file, name) {

    if (!name) {
        name = '';
    }

    if (isImage(file.type) && fs.existsSync(file.path)) {

        var newFilename = moment().format('HHMMSS-DDMM')
            + (name ? '_' + name : '_image')
            + '.' + getImageType(file.type);

        fs.renameSync(file.path, path.resolve(__dirname, 'images', newFilename));

        return 'images/' + newFilename;
    }

    return '';
};
