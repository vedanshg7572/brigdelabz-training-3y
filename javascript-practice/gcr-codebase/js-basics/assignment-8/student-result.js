// Q1 - Student Result Processing
// using a Student class with reduce() to calculate average and assign grade

class Student {
    constructor(name, marks) {
        this.name  = name;
        this.marks = marks;
    }

    calculateAverage() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        let avg = this.calculateAverage();
        if (avg >= 80) return "A";
        if (avg >= 60) return "B";
        if (avg >= 40) return "C";
        return "F";
    }

    displayResult() {
        let avg   = this.calculateAverage().toFixed(2);
        let grade = this.getGrade();
        console.log(`Student: ${this.name} | Marks: [${this.marks}] | Average: ${avg} | Grade: ${grade}`);
    }
}

let student1 = new Student("Vedansh", [88, 92, 76, 85, 90]);
let student2 = new Student("Priya",   [65, 70, 58, 72, 60]);
let student3 = new Student("Rohit",   [35, 40, 28, 45, 38]);

console.log("===== Student Results =====");
student1.displayResult();
student2.displayResult();
student3.displayResult();
