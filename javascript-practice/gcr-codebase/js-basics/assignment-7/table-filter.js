// Q6 - Real-Time Table Filter
// filtering table rows as the user types in the search box

let searchBox = document.getElementById("searchBox");
let tableBody = document.getElementById("tableBody");
let noResult  = document.getElementById("noResult");

searchBox.addEventListener("input", function() {
    let query = searchBox.value.toLowerCase().trim();
    let rows  = tableBody.querySelectorAll("tr");
    let visibleCount = 0;

    rows.forEach(row => {
        // combine all cell text in the row for matching
        let rowText = row.textContent.toLowerCase();

        if (rowText.includes(query)) {
            row.style.display = "";
            visibleCount++;
        } else {
            row.style.display = "none";
        }
    });

    // show or hide "No results found" message
    noResult.style.display = visibleCount === 0 ? "block" : "none";
});
