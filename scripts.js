const library = getStoredData()

if (library.length !== 0){
  displayBooks();
}
function getStoredData(){
  const storage = JSON.parse(window.localStorage.getItem('library'))
  let library = [];
  if (storage !== null) {
    library = storage;
  }
  return library
}
function Book(title, author, year, pages, read) {
  this.title = title
  this.author = author
  this.year = year
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book) {
  library.push(book)
  saveLibraryToLocalStorage();
}
function saveLibraryToLocalStorage(){
  window.localStorage.setItem('library', JSON.stringify(library))
}

function createHeader(table) {
  const headers = ["Title", "Author", "Year", "Pages", "Read", "Delete"]
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of headers) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}
function createRows(table) {
  for (const book of library) {
    let row = table.insertRow()
    for (key in book) {
      let cell = row.insertCell()
      if (key === 'read') {
        cell.addEventListener('click', () => {
          book.read = true;
          displayBooks();
          saveLibraryToLocalStorage();
          console.log('clicked read cell')
        })
      }
      let text = document.createTextNode(book[key])
      cell.appendChild(text)
    }
  }
}
function displayBooks() {
  const table = document.querySelector('table')
  table.innerHTML = ""
  createHeader(table)
  createRows(table)
}
function displayForm() {
  const form = document.querySelector('form')
  const newBookButton = document.querySelector('#new-book-button')
  const addBookButton = document.querySelector('#add-book-button')
  const hideFormButton = document.querySelector('#hide-form-button')
  show(form)
  hide(newBookButton)
  show(hideFormButton)
  show(addBookButton)
}
function submitForm() {
  const book = createBook()
  addBookToLibrary(book)
}

function createBook() {
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const year = document.querySelector('#year').value
  const pages = document.querySelector('#pages').value
  const read = document.querySelector('#read').checked
  return new Book(title, author, year, pages, read)
}
function hide(el) {
  el.classList.add('hidden')
}
function show(el) {
  el.classList.remove('hidden')
}
function addEventListeners() {
  const newBookButton = document.querySelector('#new-book-button')
  const addBookButton = document.querySelector('#add-book-button')
  newBookButton.addEventListener('click', function (event) {
    displayForm();
  })
  addBookButton.addEventListener('click', function (event) {
    submitForm();
    displayBooks()
  })
}
addEventListeners();