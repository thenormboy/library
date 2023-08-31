const myLibrary = [];
const container = document.querySelector('.container');
let libIndex = 0;

function Book(title, author, pages, read, libraryIndex, isDisplayed, toBeRemoved) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.libraryIndex = libraryIndex
    this.isDisplayed = isDisplayed
    this.toBeRemoved = toBeRemoved
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    libIndex = libIndex + 1;
}

function removeBookFromLibrary(book) {
    myLibrary.splice(myLibrary.indexOf(book), 1);
}

function updateLibrary(library) {
    
    library.forEach(updateBook);

    function updateBook(value) {
        
        if (value.isDisplayed === false && value.libraryIndex > -1) {
            value.isDisplayed = true;
            removeCells();
            displayCells(library);
        } else if (value.isDisplayed === true && value.toBeRemoved === true) {
            removeBookFromLibrary(value);
            removeCells();
            displayCells(library)
        }
    }
}

function displayCells(library) {

    libIndex = 0;

    library.forEach(displayCell);

    function displayCell(value) {

        value.libraryIndex = libIndex;

        const content = document.createElement('tr');
        content.classList.add('fullcell')
        content.setAttribute('id', value.libraryIndex)
    
        const display_title = document.createElement('td');
        const display_author = document.createElement('td');
        const display_pages = document.createElement('td');
        const display_read = document.createElement('td');
        const remove_button = document.createElement('button');
    
        display_title.innerText = value.title
        content.appendChild(display_title)
    
        display_author.innerText = value.author
        content.appendChild(display_author)
    
        display_pages.innerText = value.pages
        content.appendChild(display_pages)
    
        display_read.innerText = value.read
        content.appendChild(display_read)
    
        remove_button.innerText = 'x'
        remove_button.classList.add(value.libraryIndex)
        remove_button.classList.add('remove')

        remove_button.onclick = function() {clickRemove(value.libraryIndex)}

        content.appendChild(remove_button)
        container.appendChild(content);

        libIndex = libIndex + 1;
    }
}

function removeCells() {

    const content = document.getElementsByClassName('fullcell')
    Array.from(content).forEach(removeCell);

    function removeCell(value) {
        container.removeChild(value);
    }
}

function clickSubmit() {
    const book_title = document.getElementById('book_title');
    const book_author = document.getElementById('book_author');
    const book_pages = document.getElementById('book_pages');
    const book_read = document.getElementById('book_read');

    addBookToLibrary(new Book(book_title.value, book_author.value, book_pages.value, book_read.checked, libIndex, false, false));
    updateLibrary(myLibrary);
}

function clickRemove(removeButtonIndex) {

    let element = document.getElementById(removeButtonIndex)

    myLibrary.forEach(switchRemove);

    function switchRemove(value) {
        if (value.libraryIndex == removeButtonIndex) {
            value.toBeRemoved = true;
        }
    }

    element.remove();

}

const book1 = new Book('The Adamantine Narsus', 'Johannes Korantin', 213, true, libIndex, false, false);
addBookToLibrary(book1);

const book2 = new Book('Ovarian Medusa', 'Ashem Boshce', 532, true, libIndex, false, false);
addBookToLibrary(book2);

const book3 = new Book('Sickness and Syncope', 'Ashem Boshce', 67, true, libIndex, false, false);
addBookToLibrary(book3);

updateLibrary(myLibrary)

const submit = document.querySelector('.submit');

submit.addEventListener('click', () => {
    clickSubmit();
})