// Q7 - Smart Guessing Game
// checking user guess against a secret number between 1-50

let secretNumber = Math.floor(Math.random() * 50) + 1;
let userGuess = 23; // test value

console.log("===== Guessing Game =====");
console.log(`Your Guess: ${userGuess}`);
console.log(`Secret Number: ${secretNumber}`);
console.log("-------------------------");

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
    console.log("Very close!");
} else if (userGuess > secretNumber) {
    console.log("Too high!");
} else {
    console.log("Too low!");
}
