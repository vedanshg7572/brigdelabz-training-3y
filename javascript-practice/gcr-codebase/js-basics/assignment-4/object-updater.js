// Q8 - Dynamic Object Updater JS
// updating user object in real time from form inputs

let user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

// show initial object on page load
showUser();

function updateUser() {
    // reading form values and updating user object
    user.name  = document.getElementById("uName").value.trim();
    user.email = document.getElementById("uEmail").value.trim();
    user.age   = parseInt(document.getElementById("uAge").value);

    showUser();
}

function showUser() {
    document.getElementById("userDisplay").textContent = JSON.stringify(user, null, 2);
}
