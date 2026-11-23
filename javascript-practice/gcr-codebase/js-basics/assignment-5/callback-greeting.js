// Q1 - Callback Greeting
// greetUser takes a name and a callback, runs callback after greeting

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    // calling the callback function after printing the greeting
    callback();
}

// demonstrating the callback flow
greetUser("Vedansh", showEndMessage);

// another call to show it works with any name
greetUser("Priya", showEndMessage);

// CALLBACK FLOW:
// 1. greetUser("Vedansh", showEndMessage) is called
// 2. it prints "Hello Vedansh"
// 3. then it calls the function that was passed as callback
// 4. showEndMessage() runs and prints "Welcome to the course!"
