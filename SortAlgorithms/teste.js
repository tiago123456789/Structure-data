
let input1 = "FOUR";
let input2 = "TWO"

function printer(input1, input2) {
    const counterPerCharacter = {}
    let greatherValue = 0;

    function counter(input) {
        input.split("").forEach(element => {
            if (element.trim().length > 0) {
                if (counterPerCharacter[element]) {
                    counterPerCharacter[element] += 1;
                } else {
                    counterPerCharacter[element] = 1;
                }
            }
        });
    }

    counter(input1);
    counter(input2);

    console.log(counterPerCharacter);

    Object.values(counterPerCharacter).forEach(item => {
        if (item > greatherValue) {
            greatherValue = item;
        }
    });

    console.log(greatherValue == 1 ? 0 : greatherValue);
}

printer(input1, input2);
