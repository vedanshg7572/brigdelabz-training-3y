// Q3 - Monthly Expense Tracker
// calculating total, average and final amount with 10% tax

let expenses = {
    food:    4500,
    travel:  2000,
    rent:    8000,
    bills:   1500,
    leisure: 3000
};

let total = 0;

// adding all expenses using assignment operators
for (let category in expenses) {
    total += expenses[category];
}

let average = total / Object.keys(expenses).length;

// adding 10% tax to the total
let taxRate = 0.10;
total += total * taxRate;

console.log("===== Monthly Expense Report =====");
console.log(`Food:     Rs. ${expenses.food}`);
console.log(`Travel:   Rs. ${expenses.travel}`);
console.log(`Rent:     Rs. ${expenses.rent}`);
console.log(`Bills:    Rs. ${expenses.bills}`);
console.log(`Leisure:  Rs. ${expenses.leisure}`);
console.log("----------------------------------");
console.log(`Average Expense: Rs. ${average.toFixed(2)}`);
console.log(`Total (with 10% tax): Rs. ${total.toFixed(2)}`);
