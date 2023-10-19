// Capitalize first
    function capitalizeFirst(input) {

        const newArr = []
        function helper(input) {
            if (input.length === 0) {
                return;
            }

            let value = input[0]
            value = value[0].toUpperCase() + `${value.substr(1, value.length - 1)}`
            newArr.push(value)
            helper(input.splice(1))
        }

        helper(input)

        return newArr
    }

console.log(
    capitalizeFirst(['car','taco','banana'])
)