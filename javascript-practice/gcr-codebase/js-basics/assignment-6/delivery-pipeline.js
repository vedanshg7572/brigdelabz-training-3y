// Q10 - Async Delivery Pipeline
// simulating a food delivery process step by step using async/await

// each step returns a Promise that randomly succeeds or fails
function runStep(stepName) {
    return new Promise((resolve, reject) => {
        // random delay between 1 and 2 seconds
        let delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            // 20% chance each step fails
            if (Math.random() < 0.2) {
                reject(`${stepName} step failed!`);
            } else {
                resolve(`${stepName} done`);
            }
        }, delay);
    });
}

// main pipeline function using async/await
// await pauses execution here until the Promise resolves or rejects
// this means JS moves to the next step only after current step finishes
async function runPipeline() {
    console.log("Start Pipeline");

    try {
        // each await gives control back to the event loop during the delay
        // when the Promise resolves, control comes back here and continues

        await runStep("takeOrder");
        console.log("Step 1: Order taken");

        await runStep("prepare");
        console.log("Step 2: Food prepared");

        await runStep("pack");
        console.log("Step 3: Package ready");

        await runStep("dispatch");
        console.log("Step 4: Out for delivery");

        await runStep("deliver");
        console.log("Delivery completed!");

    } catch (error) {
        // if any step throws (rejects), execution jumps here
        // this is why try/catch works with async/await — it catches Promise rejections too
        console.log(`Pipeline failed! Reason: ${error}`);
    }
}

runPipeline();
