// Q8 - Custom myMap() on Array prototype
// adding a custom method to all arrays that works like built-in map()

Array.prototype.myMap = function(callback) {
    let result = [];

    // loop through each element of the array (this = the array being used)
    for (let i = 0; i < this.length; i++) {
        // apply the callback to each element and push the result
        result.push(callback(this[i], i, this));
    }

    return result;
};

// testing myMap like map()
let nums = [1, 2, 3, 4, 5];

let doubled  = nums.myMap(num => num * 2);
let squared  = nums.myMap(num => num * num);
let asString = nums.myMap(num => `Item ${num}`);

console.log("Original:       ", nums);
console.log("myMap double:   ", doubled);
console.log("myMap square:   ", squared);
console.log("myMap string:   ", asString);

// comparing with built-in map to confirm same output
let builtInDouble = nums.map(num => num * 2);
console.log("Built-in double:", builtInDouble);
console.log("Same result?    ", JSON.stringify(doubled) === JSON.stringify(builtInDouble)); // true
