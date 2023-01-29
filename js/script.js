class BookCardBuilder {
  constructor(book) {
    this.book = book;
    this.cardBox = document.createElement("li");
    this.cardBox.classList.add("card");
  }

  setTitle() {
    const bookTitle = document.createElement("h3");
    bookTitle.innerText = this.book.title;
    bookTitle.classList.add("title");
    this.cardBox.append(bookTitle);
    return this;
  }

  setDeleteButton() {
    const deleteButton = document.createElement("span");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "Remove";
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

class FormBuilder {
  constructor() {
    this.form = document.createElement("form");
  }

  getHeader() {
    const h2 = document.createElement("h2");
    h2.innerText = "New Book";
    return h2;
  }

  getInput(name, type) {
    const inputContainer = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const id = name.toLowerCase();
    label.innerText = name;
    label.setAttribute("for", id);
    input.id = id;
    input.type = type;
    inputContainer.append(label);
    inputContainer.append(input);
    inputContainer.append(span);
    return inputContainer;
  }

  getCheckbox() {
    const inputCheckbox = this.getInput("Read", "checkbox");
    const span = inputCheckbox.querySelector("span");
    inputCheckbox.removeChild(span)
    inputCheckbox.classList.add("flex-row")
    return inputCheckbox;
  }

  getAddButton() {
    const button = document.createElement("button");
    button.innerText = "Add";
    button.classList.add("add-book-button");
    button.type = "button";
    button.addEventListener("click", createBookInFormSubmit);
    return button;
  }

  build() {
    const inputTitleBox = this.getInput("Title", "text");
    const inputAuthorBox = this.getInput("Author", "text")
    const inputPagesBox = this.getInput("Pages", "text");
    const inputRead = this.getCheckbox();
    form.inputTitle = inputTitleBox.querySelector("input");
    form.inputAuthor = inputAuthorBox.querySelector("input");
    form.inputPages = inputPagesBox.querySelector("input");
    form.inputRead = inputRead.querySelector("input");

    this.form.append(this.getHeader());
    this.form.append(inputTitleBox);
    this.form.append(inputAuthorBox);
    this.form.append(inputPagesBox);
    this.form.append(inputRead);
    this.form.append(this.getAddButton());
    return this.form;
  }
}

let form = {
  inputTitle: null,
  inputAuthor: null,
  inputPages: null,
  inputRead: null,

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

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(newBook) {
  const bookComponent = new BookCardBuilder(newBook).build();
  displayBookOnScreen(bookComponent);
  myLibrary.push(newBook);
}

function removeCardFromLibrary(event) {
  event.target.parentElement.classList.remove("show-box");
  removeBookFromList(event)
  setTimeout(() => {
    event.target.parentElement.parentElement.removeChild(event.target.parentElement)
  }, 500);
}

function removeBookFromList(event) {
  const bookCard = event.target.parentElement
  const bookTitle = bookCard.querySelector(".title").textContent;
  const bookAuthor = bookCard.querySelector(".author").textContent
  const bookPage = bookCard.querySelector(".pages").textContent
  const bookPosition = getPositionInLibrary(bookTitle, bookAuthor, bookPage);
  myLibrary.splice(bookPosition, 1);
}

function getPositionInLibrary(bookTitle, bookAuthor, bookPage) {
  const bookFromLibrary =  myLibrary.filter(
    book => bookTitle === book.title && bookAuthor === book.author && bookPage === book.pages
  )[0];
  return myLibrary.indexOf(bookFromLibrary);
}

function displayBookOnScreen(bookComponent) {
  const booksList = document.querySelector("ul");
  booksList.append(bookComponent);
  setTimeout(() => {
    bookComponent.classList.add("show-box");
  }, 1);
}

function showFormOnScreen() {
  const newBookButton = document.querySelector(".create-book-button");
  newBookButton.addEventListener("click", displayFormOnScreen);
}

function displayFormOnScreen() {
  const form = new FormBuilder().build();
  const newBookButton = document.querySelector(".create-book-button");
  document.body.append(form);
  setTimeout(() => {
    form.classList.add("show-box");
  }, 1)
  newBookButton.removeEventListener("click", displayFormOnScreen);
}

function removeFormFromScreen() {
  const form = document.querySelector("form");
  form.classList.remove("show-box");
  setTimeout(() => {
    form.parentElement.removeChild(form);
  }, 500);
  showFormOnScreen();
}

function createBookInFormSubmit(event) {
  event.preventDefault();
  if (form.checkInputsValidity()) {
    form.setInputsValidations();
  } else {
    const newBook = form.createNewBook();
    addBookToLibrary(newBook);
    removeFormFromScreen();
    form.resetInputValues();
  }
}

showFormOnScreen();