// Q10 - Departmental Employee Evaluator
// rating each department based on their performance score

const departments = [
    ["HR",      72],
    ["Finance", 88],
    ["Tech",    95],
    ["Support", 63]
];

console.log("===== Department Performance Report =====");

for (let i = 0; i < departments.length; i++) {
    let name = departments[i][0];
    let score = departments[i][1];
    let rating;

    if (score >= 90) {
        rating = "Excellent";
    } else if (score >= 75) {
        rating = "Good";
    } else if (score >= 60) {
        rating = "Average";
    } else {
        rating = "Needs Improvement";
    }

    console.log(`${name} | Score: ${score} | Rating: ${rating}`);
}
