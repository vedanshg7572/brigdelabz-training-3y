// Q8 - Strict Mode Showdown
// showing what strict mode allows vs what it blocks

// --- WITHOUT STRICT MODE ---
// function demo(a, a) { ... }  → allowed (duplicate param names)
// total = 10;                  → allowed (creates implicit global)
// delete total;                → allowed (deletes the variable)

function demoNoStrict(a, a) {
    // duplicate parameter 'a' — without strict this works, last value wins
    total = 10; // creates a global variable silently
    console.log(`Without strict — total: ${total}, a: ${a}`);
    // delete works without strict (though deleting variables is bad practice)
}

demoNoStrict(5, 10);

// --- WITH STRICT MODE ---
// 1. duplicate param names → SyntaxError
// 2. undeclared variable assignment → ReferenceError
// 3. delete on a variable → SyntaxError

// CORRECT ES6 VERSION:
"use strict";

function demoStrict(a, b) {
    // separate param names, properly declared
    let total = a + b;
    console.log(`With strict — total: ${total}, a: ${a}, b: ${b}`);
    // we don't delete variables — that's just wrong anyway
}

demoStrict(5, 10);

// EXPLANATION:
// Strict mode makes JS safer:
// - No accidental global variables
// - No duplicate function parameters
// - No deleting declared variables
// ES6 always runs modules in strict mode by default
