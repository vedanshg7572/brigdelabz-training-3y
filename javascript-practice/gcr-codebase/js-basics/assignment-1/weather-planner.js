// Q5 - Weather Activity Planner
// suggesting activity based on weather conditions

let temperature = 28;    // in celsius
let isRaining = false;
let windSpeed = 10;      // in km/h

console.log("===== Weather Activity Planner =====");
console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log("------------------------------------");

if (isRaining) {
    console.log("Suggestion: Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Suggestion: Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Suggestion: Too cold and windy — stay home.");
} else {
    console.log("Suggestion: Perfect day for a walk.");
}
