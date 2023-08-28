const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.isRead = function() {
    if (read === true) {
        return "read."
    } else {
        return "not read yet."
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book('The Adamantine Narsus', 'Johannes Korantin', 213, true);
addBookToLibrary(book1);

console.log(myLibrary);

