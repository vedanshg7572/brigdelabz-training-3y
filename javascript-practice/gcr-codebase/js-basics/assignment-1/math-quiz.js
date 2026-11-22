// Q9 - Random Math Quiz Generator
// generates two random numbers and a random operator, then shows the answer

let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

let operators = ['+', '-', '*', '/'];
let operator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

switch (operator) {
    case '+':
        correctAnswer = num1 + num2;
        break;
    case '-':
        correctAnswer = num1 - num2;
        break;
    case '*':
        correctAnswer = num1 * num2;
        break;
    case '/':
        correctAnswer = parseFloat((num1 / num2).toFixed(2));
        break;
}

console.log("===== Math Quiz =====");
console.log(`Question: ${num1} ${operator} ${num2} = ?`);
console.log(`Correct Answer: ${correctAnswer}`);
