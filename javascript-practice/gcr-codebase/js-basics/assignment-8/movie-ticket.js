// Q8 - Movie Ticket Booking System
// MovieTicket → OnlineTicket inheritance + prototype chain demo

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo    = seatNo;
        this.price     = price;
    }
}

// adding printTicket() to MovieTicket prototype directly
// so both MovieTicket and OnlineTicket objects can use it
MovieTicket.prototype.printTicket = function() {
    console.log(`--- Ticket ---`);
    console.log(`Movie:   ${this.movieName}`);
    console.log(`Seat No: ${this.seatNo}`);
    console.log(`Price:   Rs.${this.price}`);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }

    // overriding printTicket to also show fees
    printTicket() {
        super.printTicket === MovieTicket.prototype.printTicket
            ? MovieTicket.prototype.printTicket.call(this)
            : null;

        // calling parent prototype printTicket manually
        MovieTicket.prototype.printTicket.call(this);
        console.log(`Conv. Fee: Rs.${this.convenienceFee}`);
        console.log(`Total:     Rs.${this.getTotalAmount()}`);
        console.log(`--------------`);
    }
}

let ticket1 = new MovieTicket("Pushpa 2",   "A5",  350);
let ticket2 = new OnlineTicket("Animal",    "B8",  450, 30);
let ticket3 = new OnlineTicket("Jawan",     "C12", 500, 50);

console.log("===== Movie Ticket Booking =====\n");

// MovieTicket using prototype method
ticket1.printTicket();

// OnlineTicket also accesses printTicket via prototype chain
console.log();
ticket2.printTicket();
console.log();
ticket3.printTicket();

// confirming prototype chain
console.log("\nPrototype Chain Check:");
console.log(ticket2 instanceof OnlineTicket); // true
console.log(ticket2 instanceof MovieTicket);  // true — chain works
