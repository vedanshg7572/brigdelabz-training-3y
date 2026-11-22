// Q8 - Dynamic Discount Evaluator
// applying discounts based on category and total cart value

const cart = [
    { item: "Laptop",  category: "electronics", price: 45000 },
    { item: "Shoes",   category: "fashion",     price: 2500  },
    { item: "Book",    category: "education",   price: 600   }
];

console.log("===== Cart Discount Summary =====");

let cartTotal = 0;

// applying per-item discount based on category
cart.forEach(product => {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    } else if (product.category === "fashion") {
        discount = 5;
    }

    let discountedPrice = product.price - (product.price * discount) / 100;
    cartTotal += discountedPrice;

    console.log(`${product.item} | Original: Rs.${product.price} | ${discount}% off | After Discount: Rs.${discountedPrice.toFixed(2)}`);
});

// if total is above 50000 apply extra 5% overall
if (cartTotal > 50000) {
    let extraDiscount = (cartTotal * 5) / 100;
    cartTotal -= extraDiscount;
    console.log(`\nCart total above Rs.50000 — extra 5% applied: -Rs.${extraDiscount.toFixed(2)}`);
}

console.log(`\nFinal Cart Total: Rs.${cartTotal.toFixed(2)}`);
