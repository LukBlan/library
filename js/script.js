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
    const deleteButton = new CloseButtonSvgFactory().createSvg();
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
    const readToggle = document.createElement("input");
    readToggle.type="checkBox";
    readToggle.classList.add("card-checkbox");
    readToggle.addEventListener("click", toggleReadStatusOnBookCard);
    readToggle.checked = this.book.read;
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

class CloseButtonSvgFactory {
  constructor() {
  }

  getSvg() {
    const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    iconSvg.classList.add("close-button");
    iconSvg.setAttribute("viewBox", "0 0 24 24");
    return iconSvg;
  }

  getPath() {
    const iconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    iconPath.setAttribute("d",
      "M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 " +
      "17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
    );
    return iconPath;
  }

  createSvg() {
    const svg = this.getSvg();
    svg.append(this.getPath());
    return svg;
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

  getCloseFormButton() {
    const button = new CloseButtonSvgFactory().createSvg();
    button.addEventListener("click", (event) => {
      removeParentContainer(event);
      toggleRotation();
      showFormOnScreen();
    });
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
    this.form.append(this.getCloseFormButton())
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
}

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleReadStatus = function() {
  this.read = !this.read;
}

function addBookToLibrary(newBook) {
  const bookComponent = new BookCardBuilder(newBook).build();
  displayBookOnScreen(bookComponent);
  myLibrary.push(newBook);
}

function removeCardFromLibrary(event) {
  removeBookFromList(event)
  removeParentContainer(event);
}

function removeBookFromList(event) {
  const bookCard = event.currentTarget.parentElement
  const bookPosition = getPositionInLibrary(bookCard);
  myLibrary.splice(bookPosition, 1);
}

function getPositionInLibrary(bookCard) {
  const bookTitle = bookCard.querySelector(".title").textContent;
  const bookAuthor = bookCard.querySelector(".author").textContent
  const bookPage = bookCard.querySelector(".pages").textContent
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
  const newBookButton = document.querySelector(".display-form-button");
  newBookButton.addEventListener("click", displayFormOnScreen);
}

function displayFormOnScreen(event) {
  const form = new FormBuilder().build();
  const displayFormButton = event.target;
  toggleRotation();
  document.body.append(form);
  setTimeout(() => {
    form.classList.add("show-box");
  }, 1)
  displayFormButton.removeEventListener("click", displayFormOnScreen);
}

function createBookInFormSubmit(event) {
  event.preventDefault();
  if (form.checkInputsValidity()) {
    form.setInputsValidations();
  } else {
    const newBook = form.createNewBook();
    addBookToLibrary(newBook);
    removeParentContainer(event);
    toggleRotation();
    showFormOnScreen();
  }
}

function toggleReadStatusOnBookCard(event) {
  const bookCard = event.target.parentElement;
  const bookPositionInLibrary = getPositionInLibrary(bookCard);
  const book = myLibrary[bookPositionInLibrary];
  book.toggleReadStatus();
}

function removeParentContainer(event) {
  const parentContainer = event.currentTarget.parentElement;
  parentContainer.classList.remove("show-box");
  setTimeout(() => {
    parentContainer.parentElement.removeChild(parentContainer)
  }, 500);
}

showFormOnScreen();

function toggleRotation() {
  const displayFormButton = document.querySelector(".display-form-button");
  if (displayFormButton.classList.value.includes("rotate")) {
    displayFormButton.classList.remove("rotate");
  } else {
    displayFormButton.classList.add("rotate");
  }
}