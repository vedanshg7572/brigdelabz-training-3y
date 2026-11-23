// Q9 - Fitness App Analytics
// FitnessAnalytics class with filter, reduce and map on workout data

class FitnessAnalytics {
    constructor(data) {
        // throwing an error if dataset is empty or missing
        if (!data || data.length === 0) {
            throw new Error("Dataset is empty. Cannot perform analytics.");
        }
        this.data = data;
    }

    // users who walked more than 7000 steps
    getActiveUsers() {
        return this.data.filter(user => user.steps > 7000);
    }

    // average calories across all users
    getAverageCalories() {
        let total = this.data.reduce((sum, user) => sum + user.calories, 0);
        return (total / this.data.length).toFixed(2);
    }

    // summary message for each user
    getUserSummary() {
        return this.data.map(user => {
            let status = user.steps > 7000 ? "Active" : "Inactive";
            return `${user.user}: ${user.steps} steps, ${user.calories} cal — ${status}`;
        });
    }
}

const workoutData = [
    { user: "A", steps: 8000,  calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000,  calories: 200 },
];

try {
    let analytics = new FitnessAnalytics(workoutData);

    console.log("===== Fitness Analytics =====");

    console.log("\n--- Active Users (steps > 7000) ---");
    let active = analytics.getActiveUsers();
    active.forEach(u => console.log(`${u.user}: ${u.steps} steps`));

    console.log(`\n--- Average Calories: ${analytics.getAverageCalories()} cal ---`);

    console.log("\n--- User Summaries ---");
    analytics.getUserSummary().forEach(msg => console.log(msg));

} catch (err) {
    console.log(`Analytics Error: ${err.message}`);
}

// testing with empty data
console.log("\n--- Testing empty dataset ---");
try {
    let emptyAnalytics = new FitnessAnalytics([]);
} catch (err) {
    console.log(`Analytics Error: ${err.message}`);
}
