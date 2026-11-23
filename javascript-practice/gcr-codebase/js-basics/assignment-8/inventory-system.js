// Q6 - E-Commerce Inventory System
// using filter(), sort(), reduce() and object grouping on product array

const products = [
    { id: 1, name: "Laptop",      category: "Electronics", price: 65000, stock: 5  },
    { id: 2, name: "Phone",       category: "Electronics", price: 35000, stock: 2  },
    { id: 3, name: "T-Shirt",     category: "Fashion",     price: 499,   stock: 50 },
    { id: 4, name: "Jeans",       category: "Fashion",     price: 1299,  stock: 3  },
    { id: 5, name: "NCERT Book",  category: "Education",   price: 350,   stock: 30 },
    { id: 6, name: "Headphones",  category: "Electronics", price: 2500,  stock: 1  },
    { id: 7, name: "Notebook",    category: "Education",   price: 80,    stock: 100 },
    { id: 8, name: "Sneakers",    category: "Fashion",     price: 2999,  stock: 4  },
];

// 1. products with stock less than 5
function getLowStockProducts() {
    return products.filter(p => p.stock < 5);
}

// 2. sort products by price low to high
function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

// 3. total value of all stock (price * stock for each product)
function calculateTotalInventoryValue() {
    return products.reduce((total, p) => total + (p.price * p.stock), 0);
}

// 4. group products by category using reduce
function groupByCategory() {
    return products.reduce((groups, p) => {
        if (!groups[p.category]) {
            groups[p.category] = [];
        }
        groups[p.category].push(p.name);
        return groups;
    }, {});
}

console.log("===== Inventory Report =====");

console.log("\n--- Low Stock Products (stock < 5) ---");
getLowStockProducts().forEach(p => console.log(`${p.name} — Stock: ${p.stock}`));

console.log("\n--- Products Sorted by Price ---");
sortProductsByPrice().forEach(p => console.log(`${p.name} — Rs.${p.price}`));

console.log(`\n--- Total Inventory Value: Rs.${calculateTotalInventoryValue().toLocaleString()} ---`);

console.log("\n--- Products Grouped by Category ---");
let grouped = groupByCategory();
for (let category in grouped) {
    console.log(`${category}: ${grouped[category].join(", ")}`);
}
