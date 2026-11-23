// Q1 - Product List Manager
// using event delegation — one listener on <ul> handles all edit/delete clicks

let productList = document.getElementById("productList");

function addProduct() {
    let input = document.getElementById("productInput");
    let name = input.value.trim();
    if (!name) return;

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${name}</span>
        <button class="btn-edit" data-action="edit">Edit</button>
        <button class="btn-delete" data-action="delete">Delete</button>
    `;
    productList.appendChild(li);
    input.value = "";
}

// allow adding with Enter key
document.getElementById("productInput").addEventListener("keydown", function(e) {
    if (e.key === "Enter") addProduct();
});

// event delegation — one listener on the parent ul catches all button clicks
productList.addEventListener("click", function(e) {
    let action = e.target.getAttribute("data-action");
    let li = e.target.closest("li");

    if (action === "delete") {
        li.remove();
    }

    if (action === "edit") {
        let span = li.querySelector("span");
        let editBtn = li.querySelector("[data-action='edit']");

        // switch to edit mode — replace span with input
        let inputField = document.createElement("input");
        inputField.value = span.textContent;
        li.replaceChild(inputField, span);
        editBtn.textContent = "Save";
        editBtn.setAttribute("data-action", "save");
        inputField.focus();

        // auto-save when clicking outside
        inputField.addEventListener("blur", function() {
            saveEdit(li, inputField);
        });
    }

    if (action === "save") {
        let inputField = li.querySelector("input");
        saveEdit(li, inputField);
    }
});

function saveEdit(li, inputField) {
    let newSpan = document.createElement("span");
    newSpan.textContent = inputField.value.trim() || "Unnamed Product";
    li.replaceChild(newSpan, inputField);
    let saveBtn = li.querySelector("[data-action='save']");
    if (saveBtn) {
        saveBtn.textContent = "Edit";
        saveBtn.setAttribute("data-action", "edit");
    }
}
