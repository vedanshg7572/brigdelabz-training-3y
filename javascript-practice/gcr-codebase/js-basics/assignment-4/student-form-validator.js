// Q2 - Student Form Validator JS
// validating form fields using regular expressions

function validate(inputId, msgId, regex, errorText, successText) {
    let input = document.getElementById(inputId);
    let msg = document.getElementById(msgId);
    let value = input.value.trim();

    if (regex.test(value)) {
        input.className = "valid";
        msg.className = "msg ok";
        msg.textContent = successText;
        return true;
    } else {
        input.className = "invalid";
        msg.className = "msg error";
        msg.textContent = errorText;
        return false;
    }
}

function validateForm() {
    // name: only alphabets and spaces
    let nameOk = validate(
        "name", "nameMsg",
        /^[a-zA-Z\s]+$/,
        "Name should contain only letters",
        "Looks good!"
    );

    // email: standard email format
    let emailOk = validate(
        "email", "emailMsg",
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Enter a valid email like example@domain.com",
        "Valid email!"
    );

    // phone: exactly 10 digits
    let phoneOk = validate(
        "phone", "phoneMsg",
        /^\d{10}$/,
        "Phone must be exactly 10 digits",
        "Valid phone number!"
    );

    // password: 1 uppercase, 1 number, 1 special character, min 8 chars
    let passOk = validate(
        "password", "passwordMsg",
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Need 8+ chars, 1 uppercase, 1 number, 1 special character",
        "Strong password!"
    );

    if (nameOk && emailOk && phoneOk && passOk) {
        alert("Registration successful!");
    }
}
