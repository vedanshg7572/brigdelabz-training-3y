// Q8 - Custom Dropdown
// no <select> tag — built from scratch using JS

let dropBtn  = document.getElementById("dropBtn");
let dropList = document.getElementById("dropList");
let dropLabel = document.getElementById("dropLabel");

// toggle dropdown open/close on button click
dropBtn.addEventListener("click", function(e) {
    e.stopPropagation(); // stop this click from reaching document listener
    let isOpen = dropList.classList.toggle("open");
    dropBtn.classList.toggle("open", isOpen);
});

// selecting an option updates button text and closes list
dropList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        dropLabel.textContent = e.target.textContent;
        dropList.classList.remove("open");
        dropBtn.classList.remove("open");
    }
});

// closing the dropdown when clicking anywhere outside
// using capturing phase (true) so this fires before bubbling events
document.addEventListener("click", function() {
    dropList.classList.remove("open");
    dropBtn.classList.remove("open");
}, true);
