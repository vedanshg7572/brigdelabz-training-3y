// Q6 - Employee Management System
// using Employee class with salary, bonus, and annual payout calculation

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        let bonus = (this.salary * percent) / 100;
        this.salary = Math.round(this.salary + bonus);
    }

    displayInfo() {
        return `ID: ${this.id} | ${this.name} | ${this.department} | Monthly: Rs.${this.salary} | Annual: Rs.${this.getAnnualSalary()}`;
    }
}

let employees = [
    new Employee(1, "Vedansh",  "Development",  55000),
    new Employee(2, "Priya",    "Design",        48000),
    new Employee(3, "Rohit",    "Marketing",     42000),
    new Employee(4, "Sneha",    "HR",            38000),
    new Employee(5, "Akash",    "Finance",       50000),
];

// applying 15% bonus to all employees
employees.forEach(emp => emp.applyBonus(15));

console.log("===== Employee Report (after 15% bonus) =====");
employees.forEach(emp => console.log(emp.displayInfo()));

// total annual payout using reduce
let totalAnnual = employees.reduce((total, emp) => total + emp.getAnnualSalary(), 0);
console.log(`\nTotal Annual Payout of Company: Rs.${totalAnnual}`);
