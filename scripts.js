let library = [];

function Book(title, author, year, pages, read) {
  this.title = title
  this.author = author
  this.year = year
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  const book = new Book(title, author, year, pages, read)

  library.push(book)

}

function createHeader(table) {
  const headers = ["Title", "Author", "Year", "Pages", "Read"]
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
  for (let book of library) {
    let row = table.insertRow()
    for (key in book) {
      let cell = row.insertCell()
      let text = document.createTextNode(book[key])
      cell.appendChild(text)
    }
  }
}
function displayBooks(table) {
  createHeader(table)
  createRows(table)
}
function displayForm(){
  const form = document.querySelector('form')
  form.classList.toggle('hidden')
}
const table = document.querySelector('table')
const bookButton = document.querySelector('#book-button')

bookButton.addEventListener('click', function (event){
  displayForm();
})