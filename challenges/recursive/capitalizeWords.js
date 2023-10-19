function capitalizeWords(input) {
    const newArr = [];

    if (input.length <= 0) {
        return [];
    }

    newArr.push(input[0].toUpperCase())
    return newArr.concat(capitalizeWords(input.splice(1)))
}

words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']