// Q10 - Citizen Eligibility Validator
// checking if person can vote, drive, or apply for passport

let age = 19;
let isCitizen = true;

console.log("===== Eligibility Check =====");
console.log(`Age: ${age}`);
console.log(`Citizen: ${isCitizen}`);
console.log("-----------------------------");

if (isCitizen && age >= 21) {
    console.log("Eligible for all services.");
} else if (isCitizen && age >= 18 && age <= 20) {
    console.log("Eligible to vote only.");
} else if (!isCitizen && age >= 18) {
    console.log("Only age criteria met.");
} else {
    console.log("Not eligible yet.");
}
