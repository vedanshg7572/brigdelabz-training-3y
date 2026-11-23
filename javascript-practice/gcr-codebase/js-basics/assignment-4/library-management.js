// Q3 - Library Management System
// using a Book class to manage book issuing and returning

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
        } else {
            this.isIssued = true;
            console.log(`"${this.title}" issued successfully.`);
        }
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" was not issued.`);
        } else {
            this.isIssued = false;
            console.log(`"${this.title}" returned successfully.`);
        }
    }

    displayInfo() {
        let status = this.isIssued ? "Issued" : "Available";
        return `Title: ${this.title} | Author: ${this.author} | ISBN: ${this.isbn} | Status: ${status}`;
    }
}

let library = [
    new Book("Clean Code",         "Robert Martin",  "ISBN001"),
    new Book("You Don't Know JS",  "Kyle Simpson",   "ISBN002"),
    new Book("JavaScript: TGP",    "Douglas Crockford","ISBN003"),
    new Book("Eloquent JavaScript","Marijn Haverbeke","ISBN004"),
];

// issue one book to test
library[1].issueBook();

console.log("\n===== All Books =====");
library.forEach(b => console.log(b.displayInfo()));

// show only available books
console.log("\n--- Available Books ---");
let available = library.filter(b => !b.isIssued);
available.forEach(b => console.log(b.displayInfo()));

// search by ISBN and issue
function issueByISBN(isbn) {
    let found = library.find(b => b.isbn === isbn);
    if (found) {
        found.issueBook();
    } else {
        console.log(`No book found with ISBN: ${isbn}`);
    }
}

console.log("\n--- Searching by ISBN ---");
issueByISBN("ISBN003");
issueByISBN("ISBN999"); // not found test
