const fs = require("fs");

const stacks = [];
let input = fs.readFileSync("./contents.txt", "utf8");
let array = input.split(/\r?\n/);

for (let i = 0; i < array.length; i++) {
    const line = array[i].split(":");
    const stackId = parseInt(line[0]);
    const target = line[1].split(",");

    const stack = {
        stack: stackId,
        cargo: target
    }

    stacks.push(stack);
}


input = fs.readFileSync("./steps.txt", "utf8");
array = input.split(/\r?\n/);
for (let i = 0; i < array.length; i++) {
    const pickedUp = [];

    const line = array[i];
    const amount = parseInt(line.split(":")[0]);
    const from = parseInt(line.split(":")[1]);
    const to = parseInt(line.split(":")[2]);

    for (let j = 0; j < amount; j++) {
        const cargo = stacks.find(stack => stack.stack === from).cargo.shift();

        pickedUp.push(cargo);
    }

    console.log(pickedUp);

    pickedUp.reverse();
    for (let j = 0; j < pickedUp.length; j++) {
        stacks.find(stack => stack.stack === to).cargo.unshift(pickedUp[j]);
    }
}

const result = stacks.map(stack => stack.cargo[0]);
console.log(result.toString().replaceAll(",", ""));