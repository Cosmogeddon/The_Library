const addBtn = document.querySelector('#addButton');
const newBtn = document.querySelector('.newButton');
const cardDisplay = document.querySelector('.cardDisplay');

let myBooks = [
  book1 = {title: 'Pickle', author: 'John', pages: 3},
  book2 = {title: 'Sandy', author: 'Bill', pages: 22},
  book3 = {title: 'What', author: 'eric', pages: 22}
];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read;
    if (document.querySelector("#readStatus").checked === true) {
      read = 'yes';
    } else {
      read = 'no';
    };
    let book = new Book(title, author, pages, read);
    myBooks.push(book);
 };

addBtn.addEventListener('click', function (event) {
  event.preventDefault();
  addBookToLibrary();
});

newBtn.addEventListener('click', function (event) {
  event.preventDefault();
  myBooks.forEach(createCards)
})


function createCards(book) {
  const bookDiv = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');

  bookDiv.classList.add('book-card');

  title.textContent = `'${book.title}'`
  author.textContent = `'${book.author}'`
  pages.textContent = `'${book.pages}'`


  cardDisplay.appendChild(bookDiv);
  bookDiv.appendChild(title);
  bookDiv.appendChild(author);
  bookDiv.appendChild(pages);
}