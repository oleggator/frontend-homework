'use strict';

const get = (object, fields) => {
    if (fields == undefined)
        return undefined
    
    if (fields == '.')
        return object;

    let regex = new RegExp(/\.(\w*)/g);

    let prop;
    while ((prop = regex.exec(fields)) !== null) {
        if (object == undefined)
            return undefined;

        object = object[prop[1]];
    }

    return object;
};
