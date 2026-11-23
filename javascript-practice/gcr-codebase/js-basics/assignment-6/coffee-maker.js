// Q1 - Async Coffee Maker
// simulating 3 steps of making coffee using Promise chaining

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // random failure simulation
            if (Math.random() < 0.2) {
                reject("Boiling failed — no water!");
            } else {
                console.log("Step 1: Water is boiling...");
                resolve("Water boiled");
            }
        }, 1000);
    });
}

function brewCoffee(prevResult) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Brewing failed — no coffee beans!");
            } else {
                console.log("Step 2: Brewing the coffee...");
                resolve("Coffee brewed");
            }
        }, 1500);
    });
}

function pourInCup(prevResult) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Pouring failed — cup is missing!");
            } else {
                console.log("Step 3: Pouring coffee into cup...");
                resolve("Done");
            }
        }, 1000);
    });
}

// chaining all steps one after another
boilWater()
    .then(result => brewCoffee(result))
    .then(result => pourInCup(result))
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });
