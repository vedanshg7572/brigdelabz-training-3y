"use strict";

// Q3 - Transaction Validator
// validating transactions and separating valid from invalid ones

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let validTransactions = [];
let invalidTransactions = [];

console.log("===== Transaction Validator =====");

for (let i = 0; i < transactions.length; i++) {
    try {
        let txn = transactions[i];

        // null check
        if (txn === null) {
            throw new Error("Null transaction entry found");
        }

        // missing id or amount check
        if (txn.id === undefined || txn.amount === undefined) {
            throw new Error(`Transaction ID ${txn.id} is missing amount field`);
        }

        // negative amount check
        if (txn.amount < 0) {
            throw new Error(`Transaction ID ${txn.id} has negative amount: ${txn.amount}`);
        }

        validTransactions.push(txn);
        console.log(`[VALID]   ID: ${txn.id} | Amount: Rs.${txn.amount}`);

    } catch (error) {
        invalidTransactions.push(error.message);
        console.log(`[INVALID] ${error.message}`);
    }
}

console.log("\n--- Final Report ---");
console.log(`Successful Transactions: ${validTransactions.length}`);
console.log(`Failed Transactions:     ${invalidTransactions.length}`);
