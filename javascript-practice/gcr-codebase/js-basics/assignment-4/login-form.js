// Q7 - Login Form Validation JS
// validating username and password with regex

function loginValidate() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let userInput = document.getElementById("username");
    let passInput = document.getElementById("password");
    let userErr   = document.getElementById("userErr");
    let passErr   = document.getElementById("passErr");
    let successMsg = document.getElementById("successMsg");

    // username: at least 5 characters
    let usernameRegex = /^.{5,}$/;

    // password: 8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let valid = true;

    if (!usernameRegex.test(username)) {
        userInput.className = "invalid";
        userErr.textContent = "Username must be at least 5 characters";
        valid = false;
    } else {
        userInput.className = "valid";
        userErr.textContent = "";
    }

    if (!passwordRegex.test(password)) {
        passInput.className = "invalid";
        passErr.textContent = "Password needs 8+ chars, uppercase, lowercase, number, special character";
        valid = false;
    } else {
        passInput.className = "valid";
        passErr.textContent = "";
    }

    if (valid) {
        successMsg.style.display = "block";
    } else {
        successMsg.style.display = "none";
    }
}
