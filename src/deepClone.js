function deepClone (object) {
    if (typeof object !== 'object') {
        throw new Error('Error: ' + object + ' is not an Object')
    }

    function isDateType (data) {
        return data instanceof Date
    }

    let newObject = {}
    for (const key in object) {
        newObject = {
            ...newObject,
            [key]: typeof object[key] === 'object' && !isDateType(object[key])
                    ? deepClone(object[key])
                    : object[key]
        }
    }
    return newObject
}

module.exports = deepClone