// Q10 - Nested Hoisting and Closures
// understanding how var hoisting works in nested functions

// --- ORIGINAL CODE ---
function outer() {
    // var count is hoisted to top of outer() as undefined
    // so this prints undefined, not an error
    console.log(count); // undefined — hoisted but not assigned yet
    var count = 5;

    function inner() {
        // inner() has its OWN var count — also hoisted as undefined
        // it shadows outer's count
        console.log(count); // undefined — inner's count hoisted, not outer's
        var count = 10;
    }

    inner();
}

console.log("===== Nested Hoisting =====");
outer();

// EXPLANATION:
// outer() → var count is hoisted → first console.log sees undefined
// inner() → has its own var count → that gets hoisted too
// so inner's console.log also sees undefined, not outer's 5
// Each function scope gets its own hoisting context

// --- ARROW FUNCTION VERSION ---
// Arrow functions behave the same with var hoisting
// but they don't have their own 'this' binding

console.log("\n--- Arrow Function Version ---");

function outer2() {
    var count = 5;

    // inner as arrow function — hoisting behavior same for var
    const inner2 = () => {
        var count = 10;
        console.log(`inner2 count: ${count}`); // 10
    };

    inner2();
    console.log(`outer2 count: ${count}`); // 5 — not affected by inner2
}

outer2();

// CALL STACK NOTE (for VS Code debugger):
// When outer() runs → outer() is on the call stack
// When inner() runs → inner() sits on top of outer() in the stack
// After inner() finishes → it's removed and outer() continues
