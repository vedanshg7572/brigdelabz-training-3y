// Q9 - ES6 Classes: Person → Student inheritance
// rewriting the prototype version using modern class syntax

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // super() calls Person's constructor to set this.name
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

let student1 = new Student("Vedansh", "Computer Science");
let student2 = new Student("Priya",   "Electronics");

student1.showName();   // from Person class
student1.showBranch(); // from Student class
console.log("---");
student2.showName();
student2.showBranch();

// checking instanceof — works exactly like prototype version
console.log(student1 instanceof Student); // true
console.log(student1 instanceof Person);  // true

// BOTH VERSIONS BEHAVE THE SAME:
// Class syntax is just cleaner "syntactic sugar" over the prototype chain
// Under the hood, JS still uses prototypes — classes don't change that
// Student.prototype still links to Person.prototype
// 'extends' sets up the prototype chain automatically
// 'super()' replaces Person.call(this, name) from the old version
