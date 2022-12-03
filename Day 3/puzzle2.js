const fs = require("fs");
const { debuglog } = require("util");

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const input = fs.readFileSync("./contents.txt", "utf8");
    let priorities = 0;
    
    const array = input.split(/\r?\n/);

   
    let amount = 0;
    let three = [];

    for (let i = 0; i < array.length; i++) {
        let line = array[i];
        let char = line.split("");
        
        let duplicates = [];

        amount++;
        three.push(char);

        if (amount === 3) {
            // Check for duplicate character in each array in three
            for (let j = 0; j < three[0].length; j++) {
                let char = three[0][j];
                if (three[1].includes(char) && three[2].includes(char) && !duplicates.includes(char)) {
                    const points = alphabet.indexOf(char) + 1;
                    priorities += points;
                    duplicates.push(char);
                }
            }
            
            amount = 0;
            three.length = 0;
        }
    }

    console.log(priorities);