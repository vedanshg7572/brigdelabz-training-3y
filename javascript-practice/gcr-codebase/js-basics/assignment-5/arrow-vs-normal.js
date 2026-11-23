// Q3 - Arrow Function vs Normal Function (this keyword)
// showing why this.name is undefined in arrow functions inside objects

// PROBLEM: arrow function does not have its own 'this'
let userArrow = {
    name: "Vedansh",
    showName: () => {
        // 'this' here refers to the outer scope (window/global), not the object
        // so this.name is undefined
        console.log("Arrow function - this.name:", this.name); // undefined
    }
};

userArrow.showName();

// WHY this.name IS UNDEFINED:
// Arrow functions do not have their own 'this' binding
// They inherit 'this' from the surrounding scope (which is global/window here)
// Global scope has no 'name' property, so it comes out as undefined

// FIX: use a normal function instead
let userNormal = {
    name: "Vedansh",
    showName: function() {
        // 'this' here refers to the object that called the method (userNormal)
        console.log("Normal function - this.name:", this.name); // Vedansh
    }
};

userNormal.showName();

// RULE TO REMEMBER:
// Use arrow functions when you DON'T want your own 'this' (like callbacks)
// Use normal functions as object methods when you DO need 'this' to refer to the object
