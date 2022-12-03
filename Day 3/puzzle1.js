const fs = require("fs");
const { debuglog } = require("util");

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const input = fs.readFileSync("./contents.txt", "utf8");
    let priorities = 0;
    
    const array = input.split(/\r?\n/);
    for (let i = 0; i < array.length; i++) {
        let line = array[i];
        let half = Math.floor(line.length / 2);

        let firstHalf = line.substring(0, half);
        let secondHalf = line.substring(half);

        let firstHalfArray = firstHalf.split("");
        let secondHalfArray = secondHalf.split("");

        // Compare the 2 arrays to find duplicate characters
        let duplicates = [];
        for (let j = 0; j < firstHalfArray.length; j++) {
            let char = firstHalfArray[j];
            if (secondHalfArray.includes(char) && !duplicates.includes(char)) {
                const points = alphabet.indexOf(char) + 1;
                priorities += points;
                duplicates.push(char);
            }
        }
    }

    console.log(priorities);