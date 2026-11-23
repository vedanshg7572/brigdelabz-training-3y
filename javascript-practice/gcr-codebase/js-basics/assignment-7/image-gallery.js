// Q5 - Image Gallery with Modal
// clicking an image opens modal; clicking outside closes it

let gallery      = document.getElementById("gallery");
let modalOverlay = document.getElementById("modalOverlay");
let modalBox     = document.getElementById("modalBox");
let modalImg     = document.getElementById("modalImg");

// open modal on image click
gallery.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        modalImg.src = e.target.src;
        modalOverlay.classList.add("open");
    }
});

// clicking the dark overlay (outside modal box) closes it
modalOverlay.addEventListener("click", function() {
    closeModal();
});

// stopPropagation prevents the click inside modal-box from bubbling up to overlay
modalBox.addEventListener("click", function(e) {
    e.stopPropagation();
});

function closeModal() {
    modalOverlay.classList.remove("open");
    modalImg.src = "";
}

// also close on Escape key
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeModal();
});
