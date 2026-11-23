// Q3 - Multi-Step Form with Validation
// moving between steps only if current input is valid

function showStep(stepNum) {
    document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
    document.getElementById(`step${stepNum}`).classList.add("active");

    // update progress dots
    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i < stepNum);
    });
}

function validate(inputId, errId, check, message) {
    let val = document.getElementById(inputId).value.trim();
    let errEl = document.getElementById(errId);
    let inputEl = document.getElementById(inputId);

    if (!check(val)) {
        errEl.textContent = message;
        inputEl.classList.add("invalid");
        return false;
    }
    errEl.textContent = "";
    inputEl.classList.remove("invalid");
    return true;
}

function goNext(currentStep) {
    if (currentStep === 1) {
        let ok = validate("fname", "fnameErr",
            val => val.length > 1 && /^[a-zA-Z\s]+$/.test(val),
            "Please enter a valid name (letters only)");
        if (ok) showStep(2);
    }

    if (currentStep === 2) {
        let ok = validate("femail", "femailErr",
            val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
            "Enter a valid email address");
        if (ok) showStep(3);
    }

    if (currentStep === 3) {
        let ok = validate("fpass", "fpassErr",
            val => val.length >= 6,
            "Password must be at least 6 characters");
        if (ok) showSummary();
    }
}

function goBack(currentStep) {
    showStep(currentStep - 1);
}

function showSummary() {
    document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
    document.getElementById("summary").style.display = "block";
    document.getElementById("sName").textContent  = document.getElementById("fname").value;
    document.getElementById("sEmail").textContent = document.getElementById("femail").value;
}
