// Q4 - Debugging Mystery
// strict mode catches undeclared variables — this is why it threw an error

// --- BROKEN VERSION (DO NOT RUN as is) ---
// "use strict";
// function showMessage() {
//     greeting = "Welcome";  // ERROR: greeting is not declared
//     console.log(greeting);
// }
// showMessage();

// --- WHY IT FAILS ---
// In strict mode, assigning to an undeclared variable throws a ReferenceError.
// Without strict mode, JS would silently create a global variable — which is bad practice.
// Strict mode prevents this accidental global creation.

// --- FIXED VERSION ---
"use strict";

function showMessage() {
    let greeting = "Welcome"; // properly declared with let
    console.log(greeting);
}

showMessage();

// --- EXPLANATION ---
// Before fix: greeting = "Welcome" tried to create an implicit global variable.
// After fix:  let greeting = "Welcome" declares it in the function scope.
// Strict mode forces us to always declare variables — which makes debugging easier.
// In VS Code debugger, you can add "greeting" as a watch variable
// and see it appear in scope only inside showMessage().
