
function sumRange(number) {
    if (number == 1) {
        return 1
    }

    return number + sumRange(number - 1)
    // 1º 3 + sumRange(2)
    // 2º       2 + sumRange(1)
    // 3º                 1

    // 1º ->  3 + 3
    // 2º ->    2 + 1
    // 3º ->        1
}


console.log(
    sumRange(3)
)