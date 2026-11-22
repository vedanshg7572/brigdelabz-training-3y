// Q3 - Math Utility Dashboard
// showing different Math functions on a number

let x = 16.75;

let rounded = Math.round(x);
let squareRoot = Math.sqrt(x).toFixed(4);
let cubed = Math.pow(x, 3).toFixed(2);
let randomNum = Math.floor(Math.random() * 41) + 10;

console.log("===== Math Dashboard =====");
console.log(`Input Number:         ${x}`);
console.log(`Rounded Value:        ${rounded}`);
console.log(`Square Root:          ${squareRoot}`);
console.log(`Power (x^3):          ${cubed}`);
console.log(`Random (10–50):       ${randomNum}`);
