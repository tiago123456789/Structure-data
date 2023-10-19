
function isPalindrome(input) {

    let stringReversed = "";
    function helper(input) {
        if (input.length <= 0) {
            return;
        }

        const lastLetterPosition = input.length - 1;
        stringReversed += input[lastLetterPosition]
        helper(input.substr(0, lastLetterPosition))
    }

    helper(input)

    return input === stringReversed
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
