// Q9 - Odd-Even Number Analyzer
// classifying numbers 1-30 as FizzBuzz, Even or Odd

let numbers = [];

// filling array with 1 to 30
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

let results = [];

numbers.forEach(num => {
    if (num % 3 === 0 && num % 5 === 0) {
        results.push(`${num}: FizzBuzz`);
    } else if (num % 2 === 0) {
        results.push(`${num}: Even`);
    } else {
        results.push(`${num}: Odd`);
    }
});

console.log("===== Odd-Even Analyzer (1 to 30) =====");
results.forEach(result => console.log(result));
