// Реализовать функцию конвертации JSON в строку

const objTest = {
    a: 'somestring',
    b: 42,
    c: false,
};

function makeJson(obj){
    let patternQuote = /'/g
    let patternWrap = /([a-z]+)/g
    if(typeof obj === "object") {
        for (const [key, value] of Object.entries(obj)) {
                `"${"key"}": "${"value"}"`
                console.log(obj)
        } 
    }
} 
console.log(makeJson(objTest))