
// // 1º VERSION
// function charCount(input) {
//     const result = {};
//     for (let index = 0; index < input.length; index++) {
//         const letter = input[index].toLowerCase();
//         if (/([0-9a-z])+/.test(letter)) {
//             if (!result[letter]) {
//                 result[letter] = 1
//             } else {
//                 result[letter] += 1

//             }
//         }
//     }

//     return result;
// }


// 2º VERSION
function charCount(input) {
    const result = {};
    for (char of input) {
        const letter = char.toLowerCase();
        if (isAlphaNumeric(letter)) {
            if (!result[letter]) {
                result[letter] = 1
            } else {
                result[letter] += 1

            }
        }
    }

    return result;
}

function isAlphaNumeric(str) {
    var code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

console.log(charCount("Hello HI hola"))

