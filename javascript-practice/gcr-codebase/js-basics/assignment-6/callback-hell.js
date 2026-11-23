// Q5 - Frontend Rush: Avoiding Callback Hell
// showing callback hell first, then rewriting with async/await

// ===== PART 1: CALLBACK HELL (messy version) =====
console.log("=== Callback Hell Version ===");

function design(cb) {
    setTimeout(() => { console.log("Stage 1: Design done"); cb(); }, 1000);
}
function build(cb) {
    setTimeout(() => { console.log("Stage 2: Build done"); cb(); }, 1000);
}
function test(cb) {
    setTimeout(() => { console.log("Stage 3: Testing done"); cb(); }, 1000);
}
function deployApp(cb) {
    setTimeout(() => { console.log("Stage 4: Deploy done"); cb(); }, 1000);
}
function celebrate(cb) {
    setTimeout(() => { console.log("Stage 5: Celebrate!"); cb(); }, 1000);
}

// nested callbacks — this is callback hell, very hard to read
design(() => {
    build(() => {
        test(() => {
            deployApp(() => {
                celebrate(() => {
                    console.log("Pipeline finished (callback hell way)\n");
                });
            });
        });
    });
});

// ===== PART 2: ASYNC/AWAIT VERSION (clean version) =====
// each stage returns a Promise instead of taking a callback

function runStage(stageName, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Stage: ${stageName} done`);
            resolve();
        }, delay);
    });
}

async function runPipeline() {
    console.log("=== Async/Await Version ===");

    await runStage("Design",   1000);
    await runStage("Build",    1000);
    await runStage("Test",     1000);
    await runStage("Deploy",   1000);
    await runStage("Celebrate",1000);

    console.log("Pipeline finished (async/await way)");

    // WHY async/await is better:
    // - reads like normal top-to-bottom code
    // - no nested indentation (pyramid of doom)
    // - easier to add try/catch for error handling
    // - much easier to understand and maintain
}

// running async version after a small delay so both outputs are separated
setTimeout(() => runPipeline(), 6000);
