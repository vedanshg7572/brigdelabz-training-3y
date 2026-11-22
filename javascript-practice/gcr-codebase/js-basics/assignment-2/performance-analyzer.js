// Q4 - Array Performance Analyzer
// analyzing student scores using array methods

let scores = [45, 78, 90, 55, 33, 88, 72, 61];

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

// adding all scores using reduce
let total = scores.reduce((sum, score) => sum + score, 0);
let average = (total / scores.length).toFixed(2);

// students who scored 50 or above
let passed = scores.filter(score => score >= 50);

// converting each score to grade labels
let grades = scores.map(score => score >= 50 ? "Pass" : "Fail");

console.log("===== Performance Analyzer =====");
console.log(`All Scores:    ${scores}`);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score:  ${lowest}`);
console.log(`Average Score: ${average}`);
console.log(`Passed (≥50):  ${passed.length} students`);
console.log(`Failed:        ${scores.length - passed.length} students`);
console.log(`Grade Labels:  ${grades}`);
