// Q2 - String Manipulation Report
// cleaning and formatting a product title

let rawTitle = "  wireless headphones PRO  ";

// step 1: trim extra spaces
let trimmed = rawTitle.trim();

// step 2: lowercase then capitalize first letter of each word
let cleanTitle = trimmed
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// step 3: replace "Pro" with "Pro Edition"
let finalTitle = cleanTitle.replace("Pro", "Pro Edition");

console.log("===== Product Title Report =====");
console.log(`Raw Title:   "${rawTitle}"`);
console.log(`Clean Title: "${finalTitle}"`);
console.log(`Title Length: ${finalTitle.length} characters`);
