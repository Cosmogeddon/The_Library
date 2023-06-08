const addBtn = document.querySelector('#addButton');


let myBooks = [];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
};

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let book = new Book(title, author, pages);
    myBooks.push(book);
 };

addBtn.addEventListener('click', function (event) {
  event.preventDefault();
  addBookToLibrary();
});