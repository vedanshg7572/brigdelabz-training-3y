// Q4 - Employee Inheritance + Polymorphism
// Manager overrides the work() method from Employee

class Employee {
    constructor(name, department) {
        this.name       = name;
        this.department = department;
    }

    work() {
        console.log(`${this.name} is working in ${this.department} department.`);
    }

    displayInfo() {
        console.log(`Name: ${this.name} | Department: ${this.department}`);
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department); // inherit name and department from Employee
        this.teamSize = teamSize;
    }

    // overriding work() — this is runtime polymorphism
    work() {
        console.log(`${this.name} is managing a team of ${this.teamSize} in ${this.department}.`);
    }

    conductMeeting() {
        console.log(`${this.name} is conducting a team meeting.`);
    }
}

let emp1     = new Employee("Vedansh", "Development");
let emp2     = new Employee("Priya",   "Design");
let manager1 = new Manager("Rohit",   "Development", 8);

console.log("===== Employee Work Report =====");
emp1.displayInfo();
emp1.work();         // Employee work()

console.log("---");
emp2.displayInfo();
emp2.work();

console.log("---");
manager1.displayInfo();
manager1.work();         // Manager's overridden work()
manager1.conductMeeting();

// polymorphism demo — same method name, different behavior
console.log("\n--- Polymorphism Demo ---");
let staff = [emp1, emp2, manager1];
staff.forEach(person => person.work()); // calls correct version for each
