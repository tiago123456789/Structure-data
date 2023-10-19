let obj = {
    num: "1",
    test: [1, 2],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}

function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}


function stringifyNumbers(input) {


    const startKeys = Object.keys(input)
    function helper(keys, reference, total) {

        if (keys.length == 0) {
            return;
        }


        const isArray = Array.isArray(reference[keys[0]])
        if (isArray) {
            const value = reference[keys[0]]
            reference[keys[0]] = value.map(item => `${item}`)
            helper(value, reference[keys[0]])
            return;
        }

        const key = keys[0];
        const value = reference[key]

        const isNumber = /([0-9])+/.test(value)
        const isObject = typeof reference[key] === 'object'
        if (isNumber) {
            reference[key] = `${value}`
        }

        if (isObject) {
            helper(Object.keys(reference[key]), reference[key])
        }

        helper(keys.splice(1), reference)
    }

    helper(startKeys, input)
    return input
}

console.log(
    stringifyNumbers(obj)
)