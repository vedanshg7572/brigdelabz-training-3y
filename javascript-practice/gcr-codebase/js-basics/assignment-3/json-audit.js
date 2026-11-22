"use strict";

// Q9 - JSON Audit
// parsing raw JSON strings, catching errors, filtering valid entries

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let cleanData = [];

console.log("===== JSON Audit =====");

for (let i = 0; i < rawData.length; i++) {
    try {
        let parsed = JSON.parse(rawData[i]);

        // checking for required keys
        if (!parsed.user || parsed.age === undefined) {
            throw new Error(`Line ${i + 1}: Missing required keys (user or age)`);
        }

        // converting age to number
        parsed.age = Number(parsed.age);

        cleanData.push(parsed);
        console.log(`[VALID]   Line ${i + 1}: user=${parsed.user}, age=${parsed.age}`);

    } catch (error) {
        // JSON.parse throws SyntaxError for invalid JSON
        if (error instanceof SyntaxError) {
            console.log(`[ERROR]   Line ${i + 1}: Invalid JSON format`);
        } else {
            console.log(`[ERROR]   ${error.message}`);
        }
    }
}

// bonus: filter users under 18
let adults = cleanData.filter(user => user.age >= 18);
let minors = cleanData.filter(user => user.age < 18);

console.log("\n--- Clean Data ---");
console.log(cleanData);
console.log(`Adults (18+): ${adults.length}`);
console.log(`Minors (<18): ${minors.length}`);
