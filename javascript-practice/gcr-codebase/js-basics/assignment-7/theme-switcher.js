// Q4 - Theme Switcher
// applying themes by setting data-theme attribute on <body> using setAttribute()

function setTheme(themeName) {
    let body = document.body;

    // removing old theme classes first
    body.classList.remove("light", "dark", "blue");

    // adding the new theme class
    body.classList.add(themeName);

    // saving the current theme in a custom data attribute
    body.setAttribute("data-theme", themeName);

    // updating the info text
    document.getElementById("themeInfo").textContent = `Current theme: ${themeName}`;

    console.log(`Theme changed to: ${body.getAttribute("data-theme")}`);
}
