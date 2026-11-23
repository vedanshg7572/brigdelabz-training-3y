// Q4 - Car Constructor with Prototype Method
// showing how prototype methods are shared between all objects

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// adding getDetails to Car.prototype so all car objects share it
// this saves memory — only one copy of this function exists
Car.prototype.getDetails = function() {
    console.log(`Brand: ${this.brand} | Model: ${this.model}`);
};

let car1 = new Car("Toyota", "Corolla");
let car2 = new Car("Honda",  "Civic");

car1.getDetails();
car2.getDetails();

// both car1 and car2 share the same getDetails method via prototype
// we can confirm this:
console.log(car1.getDetails === car2.getDetails); // true — same reference!

// PROTOTYPE SHARING EXPLANATION:
// When we do new Car(), each object gets its own brand and model
// But getDetails is on Car.prototype — both objects look up the chain to find it
// So one function serves all objects — this is prototype-based sharing
