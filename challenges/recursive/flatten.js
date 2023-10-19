// Receive a array of arrays
// Return all one array only

// input length == 0 set return empty array;
function flatten(input) {
    let newArr = []
    function helper(input) {
        if (input.length === 0) {
            return;
        }

        if (input[0].length > 0) {
            helper(input[0])
        } else {
            newArr.push(input[0])
        }

        helper(input.splice(1))
    }

    helper(input)

    return newArr
}

// console.log(
//     flatten([1, 2, 3, [4, 5] ])
// )

// console.log(
//     flatten([1, [2, [3, 4], [[5]]]])
// )

// console.log(
//     flatten([[1],[2],[3]]) // [1,2,3]
// )

console.log(
    flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])
)

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3