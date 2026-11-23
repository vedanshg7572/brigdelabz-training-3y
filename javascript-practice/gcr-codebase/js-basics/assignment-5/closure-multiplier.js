// Q7 - Closure: makeMultiplier
// inner function remembers the multiplier value from outer function

function makeMultiplier(multiplier) {
    // the inner function "closes over" the multiplier variable
    // even after makeMultiplier() has finished running,
    // the returned function still has access to multiplier
    return function(number) {
        return number * multiplier;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);
const quadruple = makeMultiplier(4);

console.log(double(5));    // 10
console.log(triple(5));    // 15
console.log(quadruple(5)); // 20

// testing with different numbers
console.log(double(10));   // 20
console.log(triple(7));    // 21

// HOW CLOSURE WORKS HERE:
// When makeMultiplier(3) is called, it creates a new function
// That function keeps a reference to the 'multiplier' variable (value = 3)
// Even though makeMultiplier() has already finished executing,
// 'triple' still remembers multiplier = 3 because of closure
// Each call to makeMultiplier() creates a NEW closure with its own multiplier
// So double, triple, quadruple all have their own separate multiplier stored
