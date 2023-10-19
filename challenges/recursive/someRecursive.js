// callback return true or false
// I need passed a value of array to callback
// If one item return true finish the processment
//

// Callback function below
const isOdd = val => val % 2 !== 0;

function someRecursive(input, callback) {
    if (input.length <= 0) {
        return false;
    }

    if (callback(input[0])) {
        return true
    }

    return someRecursive(input.splice(1), callback)
}

console.log(
    someRecursive([4,6,8], val => val > 10)
)


// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false