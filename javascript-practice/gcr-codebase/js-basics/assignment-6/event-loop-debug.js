// Q9 - Debugging the Event Loop
// predicting and verifying execution order of sync, micro, and macro tasks

// PREDICTED OUTPUT ORDER (written before running):
// 1. "Script start"     — synchronous, runs immediately
// 2. "Script end"       — synchronous, runs immediately after
// 3. "Promise callback" — microtask, runs after all sync code
// 4. "Timeout callback" — macrotask, runs after microtask queue is empty

console.log("Script start");   // 1

setTimeout(() => {
    console.log("Timeout callback"); // 4 - macrotask queue
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback"); // 3 - microtask queue
});

console.log("Script end"); // 2

// EXPLANATION:
// JavaScript engine processes code in this priority order:
//
// 1. SYNCHRONOUS CODE (Call Stack)
//    - console.log("Script start") and console.log("Script end") run first
//    - nothing can interrupt synchronous code
//
// 2. MICROTASK QUEUE (Promise.then, queueMicrotask)
//    - after call stack is empty, JS drains the entire microtask queue
//    - Promise.resolve().then() goes here → runs before setTimeout
//
// 3. MACROTASK QUEUE (setTimeout, setInterval, fetch callbacks)
//    - only picked after microtask queue is completely empty
//    - setTimeout with 0ms is still async → goes to macrotask queue
//
// So even though setTimeout has 0ms delay, Promises still run before it
