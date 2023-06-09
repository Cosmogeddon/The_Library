const addBtn = document.querySelector('#addButton');
const newBtn = document.querySelector('.newButton');
const cardDisplay = document.querySelector('.cardDisplay');
const formContainer = document.querySelector('.formContainer');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages')


//creates array of books (prefilled for now)
let myBooks = [];

//Book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};
//adds books to array
function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read;
    if (document.querySelector("#readStatus").checked === true) {
      read = 'Yes';
    } else {
      read = 'No';
    };
    let book = new Book(title, author, pages, read);
    myBooks.push(book);
 };

addBtn.addEventListener('click', function (event) {
  event.preventDefault();
  addBookToLibrary();
  resetCards();
  myBooks.forEach(createCards)
  resetForm();
});

newBtn.addEventListener('click', function (event) {
  event.preventDefault();
  resetCards();
  myBooks.forEach(createCards)
  formContainer.id = 'pickle';
})

//creates a card for each book
function createCards(book) {
  const bookDiv = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('p');
  const btnDiv = document.createElement('div');
  const rmvBtn = document.createElement('button');
  const readBtn = document.createElement('button');
  
  rmvBtn.classList.add('rmv');
  readBtn.classList.add('lei')
  bookDiv.classList.add('book-card');
  bookDiv.setAttribute('id', myBooks.indexOf(book));

  title.textContent = `Title: ${book.title}`
  author.textContent = `Author: ${book.author}`
  pages.textContent = `Pages: ${book.pages}`
  read.textContent = `Finished: ${book.read}`
  rmvBtn.textContent = 'Delete';
  readBtn.textContent = 'Read It'



  cardDisplay.appendChild(bookDiv);
  bookDiv.appendChild(title);
  bookDiv.appendChild(author);
  bookDiv.appendChild(pages);
  bookDiv.appendChild(read);
  bookDiv.appendChild(btnDiv);
  btnDiv.appendChild(rmvBtn);
  btnDiv.appendChild(readBtn);

  rmvBtn.addEventListener('click', function (event) {
    event.preventDefault();
    myBooks.splice(myBooks.indexOf(book), 1)
    resetCards();
    myBooks.forEach(createCards)
  });

  readBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (book.read === 'Yes') {
      book.read = 'No';
    } else {
      book.read = 'Yes';
    }
    resetCards();
    myBooks.forEach(createCards)
  });

}
//fixes book duplication issue upon adding book
function resetCards() {
  cardDisplay.innerHTML = '';
};

function resetForm() {
  title.value = '';
  pages.value = '';
  author.value = '';
}