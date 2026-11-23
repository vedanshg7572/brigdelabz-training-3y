// Q2 - Array Operations using Callbacks
// applyOperation takes an array and a callback to process each element

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

let numbers = [1, 2, 3, 4];

// doubling each number using a callback
let doubled = applyOperation(numbers, function(num) {
    return num * 2;
});

// squaring each number using a callback
let squared = applyOperation(numbers, function(num) {
    return num * num;
});

console.log("Original Numbers:", numbers);
console.log("Doubled:         ", doubled);
console.log("Squared:         ", squared);

// same thing using arrow function callbacks (shorter way)
let tripledArrow = applyOperation(numbers, num => num * 3);
console.log("Tripled (arrow): ", tripledArrow);
