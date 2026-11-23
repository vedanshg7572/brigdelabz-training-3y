// Q8 - Order Processing: Async Retry Mechanism
// retrying a failing API up to 3 times before giving up

function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 50% chance of failure
            if (Math.random() < 0.5) {
                reject("Order submission failed");
            } else {
                resolve("Order submitted successfully");
            }
        }, 800);
    });
}

async function processOrder() {
    let maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            let result = await submitOrder();
            console.log(`Attempt ${attempt}: Success — ${result}`);
            return; // stop trying if it succeeds
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed — ${error}`);

            if (attempt === maxAttempts) {
                throw new Error("Order could not be processed after 3 attempts");
            }
        }
    }
}

// running the retry flow
processOrder()
    .then(() => {
        console.log("Order process complete!");
    })
    .catch(error => {
        console.log(`Final Error: ${error.message}`);
    });
