"use strict";

// Q1 - Dynamic Data Parser
// parsing mixed API data into valid and invalid number categories

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

console.log("===== Data Parser Report =====");

for (let i = 0; i < apiData.length; i++) {
    let item = apiData[i];
    let asNumber = Number(item);
    let asBoolean = Boolean(item);
    let asString = String(item);

    // NaN check — if conversion fails it goes to invalid list
    if (item === null || item === undefined || item === " " || isNaN(asNumber)) {
        invalidNumbers.push(item);
        console.log(`[INVALID] Value: "${item}" | Number: ${asNumber} | Boolean: ${asBoolean} | String: "${asString}"`);
    } else {
        validNumbers.push(asNumber);
        console.log(`[VALID]   Value: "${item}" | Number: ${asNumber} | Boolean: ${asBoolean} | String: "${asString}"`);
    }
}

console.log("\n--- Summary ---");
console.log(`Valid Numbers:   ${validNumbers}`);
console.log(`Invalid Entries: ${invalidNumbers}`);
