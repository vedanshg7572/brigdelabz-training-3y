// Q2 - Online Food Ordering
// calculating bill using map() and reduce(), throwing errors for invalid items

const menu = [
    { name: "Burger",   price: 120 },
    { name: "Pizza",    price: 250 },
    { name: "Pasta",    price: 180 },
    { name: "Fries",    price: 80  },
    { name: "Cold Drink", price: 60 },
];

function calculateBill(orderItems) {
    // map each ordered item name to its price
    let prices = orderItems.map(itemName => {
        let found = menu.find(m => m.name.toLowerCase() === itemName.toLowerCase());

        if (!found) {
            throw new Error(`"${itemName}" is not on the menu`);
        }

        return found.price;
    });

    // reduce all prices to a total
    let total = prices.reduce((sum, price) => sum + price, 0);
    return total;
}

// valid order
try {
    let order1 = ["Burger", "Pizza", "Fries"];
    let bill1  = calculateBill(order1);
    console.log(`Order: ${order1.join(", ")}`);
    console.log(`Total Bill: Rs.${bill1}\n`);
} catch (err) {
    console.log(`Order failed: ${err.message}`);
}

// invalid order — item not on menu
try {
    let order2 = ["Burger", "Biryani", "Fries"];
    let bill2  = calculateBill(order2);
    console.log(`Total Bill: Rs.${bill2}`);
} catch (err) {
    console.log(`Order failed: ${err.message}`);
}
