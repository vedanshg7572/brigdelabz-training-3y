// Q9 - Shopping Cart JS
// Cart class with coupon validation using RegExp

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
}

// setting up cart with some items
let cart = new Cart();
cart.addItem("Laptop Bag",  899,  1);
cart.addItem("USB Hub",     599,  2);
cart.addItem("Mouse Pad",   299,  3);

// rendering cart table
function renderCart() {
    let tbody = document.getElementById("cartTable");
    let rows = "";

    cart.items.forEach(item => {
        rows += `<tr>
                    <td>${item.name}</td>
                    <td>Rs.${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>Rs.${item.price * item.quantity}</td>
                 </tr>`;
    });

    tbody.innerHTML = rows;
    document.getElementById("cartTotal").textContent = `Rs. ${cart.getTotal()}`;
    document.getElementById("finalTotal").textContent = `Rs. ${cart.getTotal()}`;
    document.getElementById("discountAmt").textContent = `Rs. 0`;
}

function applyCoupon() {
    let code = document.getElementById("couponInput").value.trim().toUpperCase();
    let msg  = document.getElementById("couponMsg");

    // coupon format: SAVE + 2 digits OR DISC + 2 digits
    let couponRegex = /^(SAVE|DISC)\d{2}$/;

    if (!couponRegex.test(code)) {
        msg.className = "err";
        msg.textContent = "Invalid coupon. Use format like SAVE20 or DISC10";
        return;
    }

    // extracting discount percent from the coupon code
    let discountPercent = parseInt(code.slice(-2));
    let total = cart.getTotal();
    let discountAmt = Math.round((total * discountPercent) / 100);
    let finalTotal = total - discountAmt;

    document.getElementById("discountAmt").textContent = `Rs. ${discountAmt}`;
    document.getElementById("finalTotal").textContent  = `Rs. ${finalTotal}`;

    msg.className = "ok";
    msg.textContent = `Coupon "${code}" applied — ${discountPercent}% off!`;
}

renderCart();
