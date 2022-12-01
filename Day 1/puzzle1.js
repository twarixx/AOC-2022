const prompt = require("prompt-sync")();
const fs = require("fs");

const numbers = [];
let highest = 0;

function run() {
    const input = fs.readFileSync("./contents.txt", "utf8");
    
    const array = input.split(/\r?\n/);
    console.log(array);

    const entered = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "") {
            const sum = entered.reduce((a, b) => a + b, 0);
            if (sum > highest) highest = sum;
            numbers.push(sum);
            console.log("Added " + sum);
            entered.length = 0;
        } else {
            entered.push(parseInt(array[i]));   
        }
    }

    console.log(highest);
}

run();