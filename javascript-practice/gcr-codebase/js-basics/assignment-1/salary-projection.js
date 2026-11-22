// Q8 - Employee Salary Projection
// calculating salary for next 5 years based on increment rate

let currentSalary = 50000;    // starting salary in rupees
let incrementRate = 10;       // 10% annual increment

console.log("===== 5-Year Salary Projection =====");

let salaryTable = [];

for (let year = 1; year <= 5; year++) {
    currentSalary = Math.round(currentSalary + (currentSalary * incrementRate) / 100);

    salaryTable.push({
        Year: `Year ${year}`,
        Salary: `Rs. ${currentSalary}`
    });
}

console.table(salaryTable);
