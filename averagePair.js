
function averagePair(array, number) {
    let startPosition;
    let positionValueMoreThanNumber;
    for (let index = array.length; index > 0; index -= 1) {
        if (array[index] > number) {
            positionValueMoreThanNumber = index
            startPosition = index - 1;
        }


        if (positionValueMoreThanNumber && startPosition) {
            const isAveragePair = ((array[startPosition] + array[positionValueMoreThanNumber]) / 2) === number;
            if (isAveragePair) {
                return true
            } else {
                startPosition -= 1
            }
        }
    }

    return false
}

console.log(averagePair([1,2,3], 2.5))
console.log(averagePair([1,3,3,5,6,7,10,12,19],8))
console.log(averagePair([-1,0,3,4,5,6], 4.1))
console.log(averagePair([],4))
