// function findLongestSubstring(input) {
//   // return count how many letter before repeat someone letter
//   // When repeat some letter start count from 0
//   // If second total count is more than first, change total to return for second total count
//   // When input reached last word return total 

//   let letterAlreadyShow = {};
//   let counter = 0;
//   let totalOld = 0;
//   let total = 0
//   while (total < input.length) {

//     // this isawesome

//     console.log(letterAlreadyShow)

//     if (counter >= input.length) {
//       return totalOld > total ? totalOld : total;
//     }


//     if (!letterAlreadyShow[input[counter]]) {
//       letterAlreadyShow[input[counter]] = input[counter]
//       total++
//     } else if (letterAlreadyShow[input[total]]) {
//       letterAlreadyShow = {}
//       if (totalOld === 0) {
//         totalOld = total;
//       } else {
//         totalOld = total;
//         total = 0;
//       }
//       letterAlreadyShow[input[counter]] = input[counter]
//     }

//     counter++

//   }

//   return total;
//   // let total = 0;
//   // for (let index = 0; index < input.length; index += 1) {

//   // if (!letterAlreadyShow[input[index]]) {
//   //   letterAlreadyShow[input[index]] = input[index]
//   //   total++
//   // } else {
//   //   return total;
//   // }
//   // }
//   // return total;
// }

// // console.log(findLongestSubstring('rithmschool')) // 7


function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    console.log(
      "longest => ", longest, 
      "i => ", i, 
      "start => ", start, 
      "start + 1 =>", (start + 1)
    )
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring('thisisawesome'))  // 6
