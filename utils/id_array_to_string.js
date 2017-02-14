"use strict";

module.exports = function (idArray) {

    if (typeof(parseInt(idArray, 10)) === 'number') {
        return idArray;
    }

    return idArray.join(',');
};
