"use strict";

// Q7 - Smart Calculator
// handling math operations with error catching

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

console.log("===== Smart Calculator =====");
console.log(`num1 = ${num1}, num2 = ${num2}\n`);

for (let i = 0; i < operations.length; i++) {
    let op = operations[i];

    try {
        let result;

        switch (op) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "divide":
                if (num2 === 0) throw new Error("Cannot divide by zero");
                result = num1 / num2;
                break;
            case "power":
                result = Math.pow(num1, num2);
                break;
            case "root":
                if (num1 < 0) throw new Error("Cannot find root of a negative number");
                result = Math.sqrt(num1).toFixed(4);
                break;
            default:
                throw new Error(`Invalid operation: ${op}`);
        }

        console.log(`${op.toUpperCase()}: ${num1} → Result = ${result}`);

    } catch (error) {
        console.log(`${op.toUpperCase()}: ERROR — ${error.message}`);
    }
}
