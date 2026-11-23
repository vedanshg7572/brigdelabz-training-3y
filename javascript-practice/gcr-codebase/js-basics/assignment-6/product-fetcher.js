// Q6 - Product Fetcher
// fetching products from Fake Store API and displaying them

async function loadProducts() {
    try {
        let response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Server returned an error");
        }

        let products = await response.json();

        // logging each product in console
        products.forEach(product => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
            console.log("---");
        });

        // bonus: creating HTML product cards dynamically
        let grid = document.getElementById("productGrid");

        products.forEach(product => {
            let card = document.createElement("div");
            card.className = "card";

            let img = document.createElement("img");
            img.src = product.image;
            img.alt = product.title;

            let title = document.createElement("h3");
            title.textContent = product.title;

            let price = document.createElement("p");
            price.className = "price";
            price.textContent = `$${product.price}`;

            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(price);
            grid.appendChild(card);
        });

    } catch (error) {
        console.log("Failed to load products. Please try again.");
        console.log(`Error details: ${error.message}`);

        let errMsg = document.getElementById("errorMsg");
        if (errMsg) errMsg.style.display = "block";
    }
}

loadProducts();
