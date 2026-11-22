// Q6 - Event-Based Counter Simulation
// simulating button click events with increment and decrement

let count = 0;

function increment() {
    count++;

    // nested function showing inner scope can still access count
    function logUpdate() {
        console.log(`[Increment clicked] Count is now: ${count}`);
    }

    logUpdate();
}

function decrement() {
    count--;

    function logUpdate() {
        console.log(`[Decrement clicked] Count is now: ${count}`);
    }

    logUpdate();
}

// simulating button clicks manually
increment();
increment();
increment();
decrement();
increment();
decrement();
decrement();

console.log(`\nFinal count value: ${count}`);
