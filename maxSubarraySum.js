function maxSubarraySum(array, number) {
    if (array.length < number) return null;
    let total = 0;
    for (let index = 0; index < number; index++) {
        total += array[index]
    }

    let currentTotal = total;
    for (let index = number; index < array.length; index++) {
        currentTotal += array[index] - array[index - number];
        total = Math.max(total, currentTotal)
    }

    return total
}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) // 39 
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null