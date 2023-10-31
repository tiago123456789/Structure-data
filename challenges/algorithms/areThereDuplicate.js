
function areThereDuplicate() {
    const seeNumberBefore = { }
    for (let index = 0; index < arguments.length; index += 1) {

        if (!seeNumberBefore[arguments[index]]) {
            seeNumberBefore[arguments[index]] = true;
        } else {
            return true;
        }
    }

    return false;
}

console.log(areThereDuplicate(1, 2, 3))