// Q5 - Ride Sharing Application
// User → Driver inheritance + Trip with fare calculation and error handling

class User {
    constructor(name, rating) {
        this.name   = name;
        this.rating = rating;
    }

    displayProfile() {
        console.log(`User: ${this.name} | Rating: ${this.rating}/5`);
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, plateNo) {
        super(name, rating);
        this.vehicle = vehicle;
        this.plateNo = plateNo;
    }

    displayProfile() {
        console.log(`Driver: ${this.name} | Rating: ${this.rating}/5 | Vehicle: ${this.vehicle} (${this.plateNo})`);
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation   = toLocation;
        this.distance     = distance;
    }

    calculateFare() {
        // throwing errors for invalid distance
        if (this.distance === undefined || this.distance === null) {
            throw new Error("Distance not provided for the trip");
        }
        if (this.distance < 0) {
            throw new Error("Distance cannot be negative");
        }

        let baseFare    = 30;
        let perKmCharge = 12;
        let totalFare   = baseFare + (perKmCharge * this.distance);

        return totalFare;
    }
}

// valid trip
try {
    let driver = new Driver("Arjun", 4.7, "Honda City", "MH04 AB1234");
    driver.displayProfile();

    let trip = new Trip("Andheri", "Bandra", 8);
    let fare = trip.calculateFare();
    console.log(`Trip: ${trip.fromLocation} → ${trip.toLocation} | Distance: ${trip.distance} km | Fare: Rs.${fare}`);
} catch (err) {
    console.log(`Trip Error: ${err.message}`);
}

// invalid trip — negative distance
try {
    let badTrip = new Trip("Dadar", "Thane", -5);
    badTrip.calculateFare();
} catch (err) {
    console.log(`\nTrip Error: ${err.message}`);
}
