// Q7 - Customer Feedback Processor
// checking if a review is positive or needs improvement

let feedback = "Great product! Fast delivery and amazing sound quality!";

// count total words
let wordCount = feedback.split(" ").length;

// check for negative words
let hasNegative = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

console.log("===== Feedback Report =====");
console.log(`Feedback: "${feedback}"`);
console.log(`Word Count: ${wordCount}`);

if (hasNegative) {
    console.log("Result: Needs Improvement");
} else {
    console.log("Result: Positive Feedback");
}

// testing with a negative review
console.log("\n--- Testing with negative review ---");
let negativeFeedback = "Bad experience. Poor packaging and very slow delivery.";
let hasNegative2 = negativeFeedback.toLowerCase().includes("bad") || negativeFeedback.toLowerCase().includes("poor");
console.log(`Feedback: "${negativeFeedback}"`);
console.log(`Result: ${hasNegative2 ? "Needs Improvement" : "Positive Feedback"}`);
