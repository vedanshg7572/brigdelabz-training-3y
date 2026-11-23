// Q5 - Movie Ticket Booking JS
// validating form fields using regex and storing booking info in object

function bookTicket() {
    let name   = document.getElementById("bName").value.trim();
    let email  = document.getElementById("bEmail").value.trim();
    let seats  = document.getElementById("bSeats").value.trim();

    let nameRegex  = /^[a-zA-Z\s]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let seatsNum   = parseInt(seats);

    let valid = true;

    // name check
    if (!nameRegex.test(name)) {
        document.getElementById("bName").className = "invalid";
        document.getElementById("nameErr").textContent = "Name should have alphabets only";
        valid = false;
    } else {
        document.getElementById("bName").className = "valid";
        document.getElementById("nameErr").textContent = "";
    }

    // email check
    if (!emailRegex.test(email)) {
        document.getElementById("bEmail").className = "invalid";
        document.getElementById("emailErr").textContent = "Enter a valid email address";
        valid = false;
    } else {
        document.getElementById("bEmail").className = "valid";
        document.getElementById("emailErr").textContent = "";
    }

    // seats check: must be a number between 1 and 10
    if (isNaN(seatsNum) || seatsNum < 1 || seatsNum > 10) {
        document.getElementById("bSeats").className = "invalid";
        document.getElementById("seatsErr").textContent = "Seats must be between 1 and 10";
        valid = false;
    } else {
        document.getElementById("bSeats").className = "valid";
        document.getElementById("seatsErr").textContent = "";
    }

    if (valid) {
        // storing booking info in an object
        let booking = { name: name, email: email, seats: seatsNum };

        let ticketBox  = document.getElementById("ticketBox");
        let ticketInfo = document.getElementById("ticketInfo");

        ticketInfo.innerHTML = `Name: <b>${booking.name}</b><br>Email: <b>${booking.email}</b><br>Seats Booked: <b>${booking.seats}</b>`;
        ticketBox.style.display = "block";
    }
}
