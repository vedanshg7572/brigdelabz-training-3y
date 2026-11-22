// Q1 - Personalized Login Greeting
// greeting changes based on current time of the day

let userName = "Vedansh";
let currentHour = new Date().getHours();

let greeting;

if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

console.log(greeting);
console.log(`Current hour is: ${currentHour}`);
