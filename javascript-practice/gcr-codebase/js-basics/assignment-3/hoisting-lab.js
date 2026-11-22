// Q5 - Hoisting Lab: The Sequence Trap
// understanding what happens before code runs

// --- ORIGINAL BROKEN CODE ---
// console.log(score);   // undefined — var is hoisted but not assigned yet
// announce();           // works — function declarations are fully hoisted
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();          // works — startGame is declared before use
// function startGame() { console.log(status); }  // ReferenceError: status not initialized

// EXPLANATION:
// var score → hoisted as undefined (memory allocated but no value yet)
// announce() → function declaration fully hoisted so calling before it works
// let status → NOT hoisted in the same way, it stays in "temporal dead zone"
// so startGame() calling console.log(status) would fail if status is not assigned yet

// --- FIXED VERSION ---
console.log("===== Hoisting Lab =====");

var score = 50; // declare and assign before using
console.log(`Score: ${score}`); // 50

announce(); // still works because function declarations are hoisted

let status = "ready"; // let declared before startGame uses it

startGame(); // now works fine

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(`Status: ${status}`);
}

// --- ARROW FUNCTION COMPARISON ---
// Arrow functions are NOT hoisted like regular functions
// If you do: startGame2(); before defining it → ReferenceError

console.log("\n--- Arrow Function (not hoisted) ---");

const startGame2 = () => {
    console.log("Arrow: Game started");
};

startGame2(); // must call AFTER definition
