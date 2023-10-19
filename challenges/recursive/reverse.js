
function reverse(input) {
    let stringReverse = ""
    function helper(input) {
        if (input.length <= 0) {
            return;
        }
        
        const totalLetters = input.length - 1;
        // console.log(totalLetters)
        stringReverse += input[totalLetters]
        helper(input.substring(0, (totalLetters)))
    }
    
    helper(input)
    
    return stringReverse;
}

reverse('awesome') // 'emosewa'
                       emosewa
