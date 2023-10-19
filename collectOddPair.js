
function collectOddPairv2(input) {
    const arr = []

    if (input.length == 0) {
        return []
    }

    if (input[0] % 2 !== 0) {
        arr.push(input[0])
    }

    return arr.concat(
        collectOddPairv2(
            input.slice(1)
        )
    )
}

function collectOddPair(input) {
    const results = [];

    function helper(input) {
        // Base case
        if (input.length === 1) {
            return;
        }
        
        if (input[0] % 2 !== 0) {
            results.push(input[0])
        }

        helper(input.slice(1))
    }

    helper(input)

    return results;
}

console.log(collectOddPair([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(collectOddPairv2([1, 2, 3, 4, 5, 6, 7, 8, 9]))