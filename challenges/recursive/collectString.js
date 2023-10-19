const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(input) {

    const newStrings = []
    function helper(keys, reference) {
        if (keys.length === 0) {
            return;
        }

        const value = reference[keys[0]]
        const isString = typeof value === "string"
        if (isString) {
            newStrings.push(value)
        }

        const isObject = typeof value === "object"
        if (isObject) {
            helper(Object.keys(value), value) 
            return;  
        }

        helper(keys.splice(1), reference)
    }

    helper(Object.keys(input), input)
    return newStrings
}

console.log(
    collectStrings(obj)
)
 // ["foo", "bar", "baz"])