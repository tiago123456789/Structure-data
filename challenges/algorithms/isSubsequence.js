
function isSubsequence(input1, input2) {
    let index = 0;
    let index2 = 0;
    while(index2 < input2.length) {
        if (input1[index] === input2[index2]) {
            index++;
        }

        if (index == input1.length) return true;
        console.log(input1[index2], input2[index2])
        index2++;
    }

    return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'abracadabra'))
console.log(isSubsequence('abc', 'acb'))