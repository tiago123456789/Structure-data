function countDown(number) {
    if (number <= 0) {
        console.log("finished here")
        return;
    }

    console.log(number)
    number--;
    countDown(number);
}

countDown(10)