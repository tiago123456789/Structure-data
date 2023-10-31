function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // if current window doesn't add up to the given sum then 
        // move the window to right
        if (total < sum && end < nums.length) {
            total += nums[end];
            // console.log("Total => ", total, "Position => ", end)
            end++;
        }
        // if current window adds up to at least the sum given then
        // we can shrink the window 
        else if (total >= sum) {
            console.log("Total => ", total)
            console.log("Min leng => ", minLen, "END =>", end, "START =>", start)
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            console.log("Min leng final => ", minLen)
            console.log("TOTAL SUBTRACT => ", total)
            console.log("@@@@@@@@@@@@@@@@@@@@@@@@@")
            start++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray