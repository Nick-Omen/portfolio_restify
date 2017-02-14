"use strict";

var slug = require('slug');

module.exports = function (string) {

    return slug(string, {lowercase: true});
};
