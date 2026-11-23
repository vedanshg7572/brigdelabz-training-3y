// Q4 - DevOps Delay: Async Timeout Race
// running two server deployments and tracking who finishes first

function deployServerA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Server A deployment failed!");
            } else {
                resolve("Server A: Deployment done");
            }
        }, 2000);
    });
}

function deployServerB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Server B deployment failed!");
            } else {
                resolve("Server B: Deployment done");
            }
        }, 3000);
    });
}

// Promise.all waits for both to complete
console.log("Starting deployments...");

Promise.all([deployServerA(), deployServerB()])
    .then(results => {
        console.log(results[0]);
        console.log(results[1]);
        console.log("Deployment completed for all servers");
    })
    .catch(error => {
        console.log(`Deployment failed: ${error}`);
    });

// Promise.race only waits for the fastest one
Promise.race([deployServerA(), deployServerB()])
    .then(result => {
        console.log(`Fastest response: ${result}`);
    })
    .catch(error => {
        console.log(`Race failed: ${error}`);
    });
