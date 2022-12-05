const fs = require("fs");

const input = fs.readFileSync("./contents.txt", "utf8");

let fullyCover = 0;

const array = input.split(/\r?\n/);
for (let i = 0; i < array.length; i++) {
    const pairs = array[i].split(",");
    const numbersOne = getNumbers(pairs[0]);
    const numbersTwo = getNumbers(pairs[1]);

    let fullyCovered = true;
    for (let j = 0; j < numbersTwo.length; j++) {
        if (!numbersOne.includes(numbersTwo[j])) {
            fullyCovered = false;
            break;
        }
    }

    let fullyCoveredTwo = true;
    for (let j = 0; j < numbersOne.length; j++) {
        if (!numbersTwo.includes(numbersOne[j])) {
            fullyCoveredTwo = false;
            break;
        }
    }

    console.log(fullyCovered || fullyCoveredTwo);
    if (fullyCovered || fullyCoveredTwo) fullyCover++;
}
console.log(fullyCover);

function getNumbers(input) {
    const givenNumbers = input.split('-');
    return Array.from({length: parseInt(givenNumbers[1]) - parseInt(givenNumbers[0]) + 1}, (v, k) => k + parseInt(givenNumbers[0]));
}