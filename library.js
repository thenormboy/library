const myLibrary = [];
const container = document.querySelector('.container');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function display_cells(book) {

    const content = document.createElement('tr');

    const display_title = document.createElement('td');
    const display_author = document.createElement('td');
    const display_pages = document.createElement('td');
    const display_read = document.createElement('td');

    display_title.innerText = book.title
    content.appendChild(display_title)

    display_author.innerText = book.author
    content.appendChild(display_author)

    display_pages.innerText = book.pages
    content.appendChild(display_pages)

    display_read.innerText = book.read
    content.appendChild(display_read)

    container.appendChild(content);
}


function clickSubmit() {
    const book_title = document.getElementById('book_title');
    const book_author = document.getElementById('book_author');
    const book_pages = document.getElementById('book_pages');
    const book_read = document.getElementById('book_read');

    addBookToLibrary(new Book(book_title.value, book_author.value, book_pages.value, book_read.checked));
    display_cells(new Book(book_title.value, book_author.value, book_pages.value, book_read.checked));
}

const book1 = new Book('The Adamantine Narsus', 'Johannes Korantin', 213, true);
addBookToLibrary(book1);

const book2 = new Book('Ovarian Medusa', 'Ashem Boshce', 532, true);
addBookToLibrary(book2);

display_cells(book1);
display_cells(book2);

const submit = document.querySelector('button');

submit.addEventListener('click', () => {
    clickSubmit();
})

