let myBooks = [];

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

function addBookToLibrary() {
    let title = document.querySelector('#Title').value;
    let author = document.querySelector('#Author').value;
    let pages = document.querySelector('#Pages').value;
    let readStatus = document.querySelector('#read').value;
    let book = new Book(title, author, pages, readStatus);
    myBooks.push(book);
}

const addBtn = document.getElementById('#addButton');

addBtn.addEventListener('click', addBookToLibrary);