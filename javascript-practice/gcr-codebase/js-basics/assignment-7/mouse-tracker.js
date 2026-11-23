// Q7 - Mouse Tracker
// showing live coordinates on mousemove and dropping dots on dblclick

let tracker = document.getElementById("tracker");
let coords  = document.getElementById("coords");

// tracking live mouse position inside the box
tracker.addEventListener("mousemove", function(e) {
    let rect = tracker.getBoundingClientRect();

    // position relative to box, not entire page
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    coords.textContent = `X: ${Math.round(x)} | Y: ${Math.round(y)}`;
});

// dropping a red dot on double click
tracker.addEventListener("dblclick", function(e) {
    let rect = tracker.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = `${x}px`;
    dot.style.top  = `${y}px`;

    tracker.appendChild(dot);
});

// reset coords when mouse leaves
tracker.addEventListener("mouseleave", function() {
    coords.textContent = "X: — | Y: —";
});
