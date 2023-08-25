function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.isRead = function() {
        if (read === true) {
            return "read."
        } else {
            return "not read yet."
        }
    }
    this.info = function() {
        return title + " by " + author + ", " + pages + " pages, " + this.isRead();
    }
}

const book1 = new Book('The Adamantine Narsus', 'Johannes Korantin', 213, true);

console.log(book1.info());