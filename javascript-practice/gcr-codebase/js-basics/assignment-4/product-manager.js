// Q1 - E-Commerce Product Manager
// using a class to manage products and apply discounts

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        let discountAmount = (this.price * percent) / 100;
        this.price = Math.round(this.price - discountAmount);
    }

    displayDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: Rs.${this.price} | Category: ${this.category}`;
    }
}

let products = [
    new Product(1, "Laptop",       65000, "Electronics"),
    new Product(2, "Headphones",   2500,  "Electronics"),
    new Product(3, "Notebook",     150,   "Stationery"),
    new Product(4, "Smart Watch",  8999,  "Electronics"),
    new Product(5, "Water Bottle", 450,   "Kitchen"),
];

// applying 10% discount on all products
products.forEach(p => p.applyDiscount(10));

console.log("===== All Products (after 10% discount) =====");
products.forEach(p => console.log(p.displayDetails()));

// showing only products with price > 1000
console.log("\n--- Products with Price > Rs.1000 ---");
let expensive = products.filter(p => p.price > 1000);
expensive.forEach(p => console.log(p.displayDetails()));
