function productOfArray(input) {

    if (input.length <= 0) {
        return 1;
    }

    return input[0] * productOfArray(input.slice(1))
}

console.log(productOfArray([1,2,3]))