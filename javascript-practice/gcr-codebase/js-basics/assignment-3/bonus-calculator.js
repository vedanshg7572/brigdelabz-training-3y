"use strict";

// Q2 - Employee Bonus Calculator
// converting string salary/years to numbers and calculating bonus

const employees = [
    { name: "Amit",  salary: "45000", years: "5" },
    { name: "Sara",  salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("===== Employee Bonus Report =====");

for (let i = 0; i < employees.length; i++) {
    try {
        let emp = employees[i];

        // converting string values to numbers
        let salary = Number(emp.salary);
        let years = Number(emp.years);

        if (isNaN(salary) || isNaN(years)) {
            throw new Error(`Invalid data for employee: ${emp.name}`);
        }

        // bonus rule: >3 years gets 10%, others get 5%
        let bonusRate = years > 3 ? 0.10 : 0.05;
        let bonus = salary * bonusRate;
        let totalPay = salary + bonus;

        console.log(`Name: ${emp.name} | Salary: Rs.${salary} | Years: ${years} | Bonus: Rs.${bonus} | Total: Rs.${totalPay}`);

    } catch (error) {
        console.log(`Error processing employee: ${error.message}`);
    }
}
