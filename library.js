const myLibrary = [];
const container = document.querySelector('.container');
libIndex = 0;

function Book(title, author, pages, read, libraryIndex) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.libraryIndex = libraryIndex
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayCells(book) {

    const content = document.createElement('tr');
    content.classList.add('fullcell')
    content.classList.add(libIndex)

    const display_title = document.createElement('td');
    const display_author = document.createElement('td');
    const display_pages = document.createElement('td');
    const display_read = document.createElement('td');
    const remove_button = document.createElement('button');

    display_title.innerText = book.title
    content.appendChild(display_title)

    display_author.innerText = book.author
    content.appendChild(display_author)

    display_pages.innerText = book.pages
    content.appendChild(display_pages)

    display_read.innerText = book.read
    content.appendChild(display_read)

    remove_button.innerText = 'x'
    remove_button.classList.add(libIndex)
    remove_button.classList.add('remove')
    content.appendChild(remove_button)

    container.appendChild(content);

    libIndex = libIndex + 1;

}

function clickSubmit() {
    const book_title = document.getElementById('book_title');
    const book_author = document.getElementById('book_author');
    const book_pages = document.getElementById('book_pages');
    const book_read = document.getElementById('book_read');

    addBookToLibrary(new Book(book_title.value, book_author.value, book_pages.value, book_read.checked));
    displayCells(new Book(book_title.value, book_author.value, book_pages.value, book_read.checked));
}

function clickRemove(removeButtonIndex) {
    const content= document.getElementsByClassName('fullcell')

    Array.from(content).forEach(removeChild);

    function removeChild(value) {
        if (value.classList[1] == removeButtonIndex) {

            container.removeChild(value);
        }
    }
}

const book1 = new Book('The Adamantine Narsus', 'Johannes Korantin', 213, true, libIndex);
addBookToLibrary(book1);
displayCells(book1);

const book2 = new Book('Ovarian Medusa', 'Ashem Boshce', 532, true, libIndex);
addBookToLibrary(book2);
displayCells(book2);


const submit = document.querySelector('.submit');

submit.addEventListener('click', () => {
    clickSubmit();
})

