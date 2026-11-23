// Q6 - Prototype Chain: Person → Faculty → Professor
// showing a 3-level chain where Professor can access everything

function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log(`Hi, I am ${this.name}`);
};

function Faculty(name, department) {
    Person.call(this, name); // inherit name from Person
    this.department = department;
}
// link Faculty to Person
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function() {
    console.log(`Department: ${this.department}`);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department); // inherit from Faculty
    this.subject = subject;
}
// link Professor to Faculty
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function() {
    console.log(`Subject: ${this.subject}`);
};

let prof = new Professor("Dr. Sharma", "Computer Science", "Data Structures");

// Professor can access all methods from the entire chain
prof.greet();          // from Person.prototype
prof.showDepartment(); // from Faculty.prototype
prof.showSubject();    // from Professor.prototype

// checking the chain
console.log(prof instanceof Professor); // true
console.log(prof instanceof Faculty);   // true
console.log(prof instanceof Person);    // true — full chain!
