// Q1 - Scope Conflict Resolver
// showing how global and local variables work in JS

let bonus = 5000; // global variable

function calculateSalary() {
    let salary = 40000; // local variable
    let isPermanent = true; // change this to false to test

    if (isPermanent) {
        salary = salary + bonus;
        console.log(`Employee is permanent. Total Salary: Rs. ${salary}`);
    } else {
        console.log(`Employee is not permanent. Salary without bonus: Rs. ${salary}`);
    }

    // global bonus is not changed inside this function
    console.log(`Global bonus is still: Rs. ${bonus}`);
}

calculateSalary();

// testing with isPermanent as false
function calculateSalaryContract() {
    let salary = 40000;
    let isPermanent = false;

    if (isPermanent) {
        salary = salary + bonus;
        console.log(`Total Salary (with bonus): Rs. ${salary}`);
    } else {
        console.log(`Total Salary (no bonus): Rs. ${salary}`);
    }
}

console.log("\n--- Testing with contract employee ---");
calculateSalaryContract();
