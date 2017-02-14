"use strict";

module.exports = function (objs, keys) {

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
