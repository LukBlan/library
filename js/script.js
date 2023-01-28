let form = {
  inputTitle: document.getElementById("title"),
  inputAuthor: document.getElementById("author"),
  inputPages: document.getElementById("pages"),
  inputRead: document.getElementById("read"),

  checkInputsValidity: function () {
    return form.inputTitle.value === "" || form.inputAuthor.value === ""  || form.inputPages.value === "";
  },

  setInputsValidations: function () {
    this.inputTitle.setCustomValidity((this.inputTitle.value  === "")? "Invalid field." : "");
    this.inputAuthor.setCustomValidity((this.inputAuthor.value === "")? "Invalid field." : "");
    this.inputPages.setCustomValidity((this.inputPages.value  === "")? "Invalid field." : "");
  },

  createNewBook: function () {
    return new Book(
      this.inputTitle.value,
      this.inputAuthor.value,
      this.inputPages.value,
      this.inputRead.checked
    );
  },

  resetInputValues: function () {
    this.inputTitle.value = "";
    this.inputAuthor.value = "";
    this.inputPages.value = "";
  }
}

let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

showFormOnScreen()
createBookInFormSubmit()

function addBookToLibrary(newBook) {
  const bookComponent = generateNewBook(newBook);
  displayBookOnScreen(bookComponent)
  myLibrary.push(newBook);
}

function generateNewBook(newBook) {
  const bookCard = document.createElement("li");
  const bookName = document.createElement("h3");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const readToggle = document.createElement("input");
  const redDeleteButton = generateDeleteButtonOnCard()

  readToggle.type="checkBox";
  readToggle.classList.add("card-checkbox")

  bookCard.classList.add("card");
  bookName.innerText = newBook.name;
  author.innerText = newBook.author;
  pages.innerText = newBook.pages;

  bookCard.append(bookName);
  bookCard.append(author);
  bookCard.append(pages);
  bookCard.append(redDeleteButton);
  bookCard.append(readToggle);
  return bookCard;
}

function generateDeleteButtonOnCard() {
  const deleteButton = document.createElement("span");
  deleteButton.classList.add("card-cross");
  deleteButton.innerText = "x";
  deleteButton.addEventListener("click", removeCardFromLibrary)
  return deleteButton;
}

function removeCardFromLibrary(event) {

  event.target.parentElement.classList.remove("show-box");
  setTimeout(() => {
    event.target.parentElement.parentElement.removeChild(event.target.parentElement)
  }, 500)
}

function displayBookOnScreen(bookComponent) {
  const booksList = document.querySelector("ul");
  booksList.append(bookComponent);
  setTimeout(() => {
    bookComponent.classList.add("show-box");
  }, 1)
}

function showFormOnScreen() {
  const newBookButton = document.querySelector(".create-book-button");
  newBookButton.addEventListener("click", displayFormOnScreen);
}

function displayFormOnScreen() {
  const form = document.querySelector("form");
  const newBookButton = document.querySelector(".create-book-button");
  form.classList.add("show-box");
  newBookButton.removeEventListener("click", displayFormOnScreen);
}

function removeFormFromScreen() {
  const form = document.querySelector("form");
  form.classList.remove("show-box");
  showFormOnScreen();
}

function createBookInFormSubmit() {
  const addBookButton = document.querySelector(".add-book-button");
  addBookButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (form.checkInputsValidity()) {
      form.setInputsValidations()
    } else {
      const newBook = form.createNewBook();
      addBookToLibrary(newBook);
      removeFormFromScreen();
      form.resetInputValues()
    }
  })
}