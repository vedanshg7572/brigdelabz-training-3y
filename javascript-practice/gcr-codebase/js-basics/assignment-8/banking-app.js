// Q7 - Banking Application
// using private field #balance with deposit, withdraw and getBalance methods

class BankAccount {
    #balance; // private field — cannot be accessed directly from outside

    constructor(ownerName, initialBalance) {
        this.ownerName = ownerName;
        this.#balance  = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than 0");
        }
        this.#balance += amount;
        console.log(`Deposited Rs.${amount} | New Balance: Rs.${this.#balance}`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than 0");
        }
        if (amount > this.#balance) {
            throw new Error(`Insufficient balance. Available: Rs.${this.#balance}`);
        }
        this.#balance -= amount;
        console.log(`Withdrawn Rs.${amount} | Remaining Balance: Rs.${this.#balance}`);
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount("Vedansh", 10000);

console.log("===== Banking Application =====");
console.log(`Account: ${account.ownerName}`);
console.log(`Opening Balance: Rs.${account.getBalance()}\n`);

// valid deposits and withdrawals
try {
    account.deposit(5000);
    account.withdraw(3000);
    account.deposit(1000);
    console.log(`\nFinal Balance: Rs.${account.getBalance()}`);
} catch (err) {
    console.log(`Transaction Error: ${err.message}`);
}

// invalid withdrawal — more than balance
console.log("\n--- Testing invalid withdrawal ---");
try {
    account.withdraw(50000);
} catch (err) {
    console.log(`Transaction Error: ${err.message}`);
}

// trying to access private field directly — this will throw an error
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared
