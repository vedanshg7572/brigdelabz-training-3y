"use strict";

// Q6 - Pyramid Pattern Generator
// printing a star pyramid with let and showing var comparison

let rows = 5; // default row count, change this to test

console.log("===== Pyramid Pattern (using let) =====");

for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "* ";
    }
    console.log(line.trim());
}

// --- VAR vs LET difference ---
// With var, the loop variable leaks outside the loop block
// With let, the variable stays inside the block only

console.log("\n--- var leaks out of loop ---");
for (var k = 1; k <= 3; k++) {
    // using var here
}
console.log(`var k after loop: ${k}`); // prints 4 — it leaked out

console.log("\n--- let stays inside loop ---");
for (let m = 1; m <= 3; m++) {
    // using let here
}
// console.log(m); // this would throw ReferenceError — m is not accessible here

// strict mode catches undeclared variables inside loops
// for example: for (p = 0; ...) would throw error in strict mode
