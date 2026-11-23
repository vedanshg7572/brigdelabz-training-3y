// Q3 - Product Discount System
// using constructor function + prototype method to apply discounts

function Product(name, price) {
    this.name  = name;
    this.price = price;
}

// prototype method — shared by all Product objects, not duplicated
Product.prototype.applyDiscount = function(percent) {
    let discountAmt = (this.price * percent) / 100;
    let newPrice    = this.price - discountAmt;
    return newPrice.toFixed(2);
};

Product.prototype.displayInfo = function() {
    console.log(`Product: ${this.name} | Original Price: Rs.${this.price}`);
};

let laptop  = new Product("Laptop",   65000);
let phone   = new Product("Phone",    35000);
let earbuds = new Product("Earbuds",  2500);

console.log("===== Product Discount System =====");

laptop.displayInfo();
console.log(`After 15% discount: Rs.${laptop.applyDiscount(15)}\n`);

phone.displayInfo();
console.log(`After 10% discount: Rs.${phone.applyDiscount(10)}\n`);

earbuds.displayInfo();
console.log(`After 20% discount: Rs.${earbuds.applyDiscount(20)}\n`);

// ABSTRACTION BENEFIT:
// We don't need to know the discount formula every time
// We just call applyDiscount(percent) and it handles everything
// All products share one method via prototype — no memory waste
