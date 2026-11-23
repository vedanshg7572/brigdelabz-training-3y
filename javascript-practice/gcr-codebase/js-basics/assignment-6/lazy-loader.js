// Q7 - Lazy Loader: Promise.allSettled Practice
// loading profile, posts and messages with one random failure

function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // randomly reject to simulate failure
            if (Math.random() < 0.4) {
                reject("Profile failed to load");
            } else {
                resolve("Profile Loaded");
            }
        }, 2000);
    });
}

function loadPosts() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Posts Loaded"), 1500);
    });
}

function loadMessages() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Messages Loaded"), 1000);
    });
}

let startTime = Date.now();

// allSettled waits for all, even if some fail — unlike Promise.all
Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
    .then(results => {
        let endTime = Date.now();
        let timeTaken = ((endTime - startTime) / 1000).toFixed(2);

        console.log("===== Dashboard Load Results =====");

        results.forEach((result, index) => {
            let module = ["Profile", "Posts", "Messages"][index];

            if (result.status === "fulfilled") {
                console.log(`${module}: SUCCESS — ${result.value}`);
            } else {
                console.log(`${module}: FAILED  — ${result.reason}`);
            }
        });

        console.log(`\nTotal time taken: ${timeTaken}s`);
    });
