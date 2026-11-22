// Q4 - Academic Performance Evaluator
// checking if student is promoted based on marks

let marks = [78, 85, 60, 90, 72]; // marks of 5 subjects
let totalMarks = 0;
let failed = false;

for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];

    // if any subject is below 35 student is detained directly
    if (marks[i] < 35) {
        failed = true;
    }
}

let average = totalMarks / marks.length;
let percentage = average; // marks are already out of 100

console.log("===== Academic Report =====");
console.log(`Marks: ${marks}`);
console.log(`Total: ${totalMarks}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

if (failed) {
    console.log("Result: Detained (scored below 35 in a subject)");
} else if (percentage >= 85) {
    console.log("Result: Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Result: Promoted");
} else {
    console.log("Result: Detained");
}
