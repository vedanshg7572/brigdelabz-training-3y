// Q6 - Progressive Discount System
// applying discount based on purchase amount

let totalAmount = 7500; // purchase amount in rupees
let discountPercent = 0;

if (totalAmount >= 10000) {
    discountPercent = 25;
} else if (totalAmount >= 5000) {
    discountPercent = 15;
} else if (totalAmount >= 2000) {
    discountPercent = 5;
} else {
    discountPercent = 0;
}

let discountAmount = (totalAmount * discountPercent) / 100;
let finalPrice = Math.round(totalAmount - discountAmount);

console.log("===== Discount Summary =====");
console.log(`Original Total:    Rs. ${totalAmount}`);
console.log(`Discount Applied:  ${discountPercent}%`);
console.log(`Discount Amount:   Rs. ${discountAmount}`);
console.log(`Final Price:       Rs. ${finalPrice}`);
