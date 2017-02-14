"use strict";

module.exports = function (idArray) {

    if(Array.isArray(idArray)) {
        return idArray.join(',');
    }

    if (typeof(parseInt(idArray, 10)) === 'number') {
        return idArray.toString();
    }

    throw new Error('Pass array or integer');
};
