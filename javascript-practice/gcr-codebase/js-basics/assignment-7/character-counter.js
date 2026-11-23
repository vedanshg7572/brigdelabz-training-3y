// Q2 - Live Character Counter
// tracking characters remaining and changing colors as limit approaches

let maxChars = 100;
let textArea = document.getElementById("textArea");
let counter  = document.getElementById("counter");

textArea.addEventListener("keydown", function(e) {
    let remaining = maxChars - textArea.value.length;

    // block all typing except backspace/delete when limit is reached
    if (remaining <= 0 && e.key !== "Backspace" && e.key !== "Delete") {
        e.preventDefault(); // stop the character from being added
    }
});

textArea.addEventListener("input", function() {
    let used = textArea.value.length;
    let remaining = maxChars - used;

    counter.textContent = `${remaining} characters remaining`;

    // change color based on how many chars are left
    counter.className = "counter";
    if (remaining <= 0) {
        counter.classList.add("danger");
    } else if (remaining <= 20) {
        counter.classList.add("warning");
    }
});

function resetAll() {
    textArea.value = "";
    counter.textContent = `${maxChars} characters remaining`;
    counter.className = "counter";
}
