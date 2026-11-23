// Q9 - Form Submit Blocker
// preventing form submission if any field is invalid using preventDefault()

let form      = document.getElementById("myForm");
let nameInput = document.getElementById("name");
let emailInput= document.getElementById("email");
let passInput = document.getElementById("password");

// live error clearing — errors disappear as the user types and fixes them
nameInput.addEventListener("input", () => liveCheck(nameInput, "nameErr", val => val.trim().length > 1, "Name is required"));
emailInput.addEventListener("input",() => liveCheck(emailInput,"emailErr",val => val.includes("@"), "Email must contain @"));
passInput.addEventListener("input", () => liveCheck(passInput, "passErr", val => val.length >= 6, "Password must be at least 6 characters"));

function liveCheck(input, errId, check, msg) {
    let val = input.value;
    let errEl = document.getElementById(errId);

    if (check(val)) {
        input.className = "valid";
        errEl.textContent = "";
    } else {
        input.className = "invalid";
        errEl.textContent = msg;
    }
}

// on submit — block if any field is invalid
form.addEventListener("submit", function(e) {
    e.preventDefault(); // always block default submit first

    let nameVal  = nameInput.value.trim();
    let emailVal = emailInput.value.trim();
    let passVal  = passInput.value.trim();

    let valid = true;

    if (nameVal.length < 2) {
        showError(nameInput, "nameErr", "Name is required");
        valid = false;
    } else {
        clearError(nameInput, "nameErr");
    }

    if (!emailVal.includes("@")) {
        showError(emailInput, "emailErr", "Email must contain @");
        valid = false;
    } else {
        clearError(emailInput, "emailErr");
    }

    if (passVal.length < 6) {
        showError(passInput, "passErr", "Password must be at least 6 characters");
        valid = false;
    } else {
        clearError(passInput, "passErr");
    }

    if (valid) {
        document.getElementById("successMsg").style.display = "block";
    }
});

function showError(input, errId, msg) {
    input.className = "invalid";
    document.getElementById(errId).textContent = msg;
}

function clearError(input, errId) {
    input.className = "valid";
    document.getElementById(errId).textContent = "";
}
