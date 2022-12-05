const fs = require("fs");

const input = fs.readFileSync("./contents.txt", "utf8");

let amount = 0;

const array = input.split(/\r?\n/);
for (let i = 0; i < array.length; i++) {
    const pairs = array[i].split(",");
    const numbersOne = getNumbers(pairs[0]);
    const numbersTwo = getNumbers(pairs[1]);

    const longestArray = numbersOne.length > numbersTwo.length ? numbersOne : numbersTwo;
    const shortestArray = numbersOne.length > numbersTwo.length ? numbersTwo : numbersOne;

    const duplicates = [];

    for (let j = 0; j < longestArray.length; j++) {
        if (shortestArray.includes(longestArray[j]) && !duplicates.includes(longestArray[j])) {
            amount++;
            break;
        }
    }
}
console.log(amount);

function getNumbers(input) {
    const givenNumbers = input.split('-');
    return Array.from({length: parseInt(givenNumbers[1]) - parseInt(givenNumbers[0]) + 1}, (v, k) => k + parseInt(givenNumbers[0]));
}