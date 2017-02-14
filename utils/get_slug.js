"use strict";

var slug = require('slug');

module.exports = function (string) {

    return slug(string.toLowerCase(), {
        symbols: false
    });
};
