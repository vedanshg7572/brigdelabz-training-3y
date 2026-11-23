// Q2 - Task Scheduler: Micro vs Macro Challenge
// showing the order in which JS runs sync, microtasks and macrotasks

console.log("Start"); // 1 - runs first (synchronous)

// macrotask - goes to the macrotask queue, runs last
setTimeout(() => {
    console.log("setTimeout callback"); // 4 - runs after all microtasks
}, 0);

// microtask - goes to the microtask queue, runs before macrotasks
Promise.resolve().then(() => {
    console.log("Promise.then callback"); // 3 - runs before setTimeout
});

console.log("End"); // 2 - runs second (synchronous)

// WHY THIS ORDER?
// JavaScript engine runs all synchronous code first (call stack)
// After call stack is empty, it checks the microtask queue (Promises go here)
// Only after the microtask queue is empty, it picks from the macrotask queue (setTimeout)
// So order is: Sync → Microtasks (Promises) → Macrotasks (setTimeout/setInterval)
