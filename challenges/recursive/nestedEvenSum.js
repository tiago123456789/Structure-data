

// Get all keys of objects
// Check if object call function again
// Check if value is number and even


var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }

function nestedEvenSum(input) {
    let count = 0
    let keys = Object.keys(input);
    function helper(keys, input) {
        if (keys.length === 0) {
            return;
        }

        const key = keys[0]
        const isNumber = /([0-9])+/.test(input[key])
        if (isNumber && input[key] % 2 === 0) {
            count += input[key]
        }

        if (typeof input[key] === 'object') {
            helper(Object.keys(input[key]), input[key])
        }

        helper(keys.splice(1), input)
    }

    helper(keys, input)

    return count;
}

console.log(
    nestedEvenSum(obj1)
)