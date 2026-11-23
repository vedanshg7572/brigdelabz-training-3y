// Q3 - Bug Tracker: Callback to Promise Migration
// converting old callback-based code to Promise-based version

// original callback version (old way)
function fetchBugs(callback) {
    setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// new Promise-based version
function getBugs() {
    return new Promise((resolve, reject) => {
        // simulating random API failure
        let apiWorking = Math.random() > 0.3;

        setTimeout(() => {
            if (apiWorking) {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            } else {
                reject("API Error: Bug tracker service is down");
            }
        }, 1000);
    });
}

// using the Promise version
getBugs()
    .then(bugs => {
        console.log("Bugs fetched successfully:");
        // displaying in a nice table format
        let bugTable = bugs.map((bug, i) => ({ No: i + 1, Bug: bug }));
        console.table(bugTable);
    })
    .catch(error => {
        console.log(`Failed to load bugs: ${error}`);
    });
