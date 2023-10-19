// Start value equal 1
// The next value is sum all previous numbers

function fib(number) {
    let n1 = 0;
    let n2 = 1;
    let nextTerm;

    function helper(number, limit) {
        if (limit === (number - 1)) {
            return;
        }

        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;

        helper(number, limit + 1)
    }

    helper(number, 0)
    return nextTerm
}


console.log(fib(4))

// let n1 = 0, n2 = 1, nextTerm;

// for (let i = 1; i <= (10 - 1); i++) {
//     // console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

// console.log(nextTerm)
