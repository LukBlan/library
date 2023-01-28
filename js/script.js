class BuilderBookCard {
  constructor(book) {
    this.book = book;
    this.cardBox = document.createElement("li");
    this.cardBox.classList.add("card");
  }

  setTitle() {
    const bookTitle = document.createElement("h3");
    bookTitle.innerText = this.book.name;
    bookTitle.classList.add("title");
    this.cardBox.append(bookTitle);
    return this;
  }

  setDeleteButton() {
    const deleteButton = document.createElement("span");
    deleteButton.classList.add("card-cross");
    deleteButton.innerText = "x";
    deleteButton.addEventListener("click", removeCardFromLibrary)
    this.cardBox.append(deleteButton);
    return this;
  }

  setAuthor() {
    const author = document.createElement("p");
    author.innerText = this.book.author;
    author.classList.add("author");
    this.cardBox.append(author);
    return this;
  }

  setPages() {
    const pages = document.createElement("p");
    pages.innerText = this.book.pages;
    pages.classList.add("pages");
    this.cardBox.append(pages);
    return this;
  }

  setToggle() {
    const readToggle = document.createElement("input")
    readToggle.type="checkBox";
    readToggle.classList.add("card-checkbox")
    this.cardBox.append(readToggle);
    return this;
  }

  build() {
    this.setTitle()
      .setAuthor()
      .setPages()
      .setToggle()
      .setDeleteButton();
    return this.cardBox
  }
}

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
  const bookComponent = new BuilderBookCard(newBook).build();
  displayBookOnScreen(bookComponent)
  myLibrary.push(newBook);
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