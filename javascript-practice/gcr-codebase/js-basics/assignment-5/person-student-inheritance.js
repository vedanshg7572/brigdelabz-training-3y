// Q5 - Person → Student Prototype Inheritance
// Student inherits name from Person and adds its own branch property

function Person(name) {
    this.name = name;
}

// method on Person prototype
Person.prototype.showName = function() {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    // calling Person constructor to set name
    Person.call(this, name);
    this.branch = branch;
}

// linking Student prototype to Person prototype
// this is what creates the prototype chain
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Student's own method
Student.prototype.showBranch = function() {
    console.log(`Branch: ${this.branch}`);
};

let student1 = new Student("Vedansh", "Computer Science");
let student2 = new Student("Priya",   "Electronics");

student1.showName();   // from Person prototype
student1.showBranch(); // from Student prototype
console.log("---");
student2.showName();
student2.showBranch();

// checking the prototype chain
console.log(student1 instanceof Student); // true
console.log(student1 instanceof Person);  // true — chain works!
