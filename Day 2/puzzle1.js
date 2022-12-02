const fs = require("fs");

const points = [
    {
        type: 'X',
        points: 1
    },
    {
        type: 'Y',
        points: 2
    },
    {
        type: 'Z',
        points: 3
    }
];

const options = [
    {
        'other': 'A',
        'you': 'X',
        'score': 3
    },
    {
        'other': 'B',
        'you': 'Y',
        'score': 3
    },
    {
        'other': 'C',
        'you': 'Z',
        'score': 3
    },
    {
        'other': 'A',
        'you': 'Y',
        'score': 6
    },
    {
        'other': 'A',
        'you': 'Z',
        'score': 0
    },
    {
        'other': 'B',
        'you': 'X',
        'score': 0
    },
    {
        'other': 'B',
        'you': 'Z',
        'score': 6
    },
    {
        'other': 'C',
        'you': 'X',
        'score': 6
    },
    {
        'other': 'C',
        'you': 'Y',
        'score': 0
    }
]

function run() {
    const input = fs.readFileSync("./contents.txt", "utf8");
    let totalScore = 0;
    
    const array = input.split(/\r?\n/);
    for (let i = 0; i < array.length; i++) {
        const values = array[i].split(" ");
    

        console.log(values);
        const foundScore = options.find(option => option.other === values[0] && option.you === values[1]);
        const foundPoints = points.find(point => point.type === values[1]).points;
        console.log(foundScore);
        result = foundPoints + foundScore['score'];
        totalScore += result;
    }

    console.log(totalScore);
}

run();