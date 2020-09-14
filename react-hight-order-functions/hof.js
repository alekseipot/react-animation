const numbers = [1, 2, 3, 4, 5]



function createAddNumber(number) {
    return function (array) {
        return array.map(i => i + number)
    }
}

const addOne = createAddNumber(1)
const addFive = createAddNumber(5)

console.log(addOne(numbers))
console.log(addFive(numbers))