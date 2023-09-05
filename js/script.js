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

  setField(name) {
    const container = document.createElement("div");
    const author = document.createElement("p");
    const text = document.createElement("p");

    text.innerText = name;
    text.classList.add("border-bellow-field");
    author.innerText = this.book[name];
    author.classList.add(name);
    this.cardBox.append(author);
    container.append(author);
    container.append(text);
    this.cardBox.append(container);
    return this;
  }

  setToggle() {
    const container = document.createElement("div");
    const text = document.createElement("p");
    const readToggle = document.createElement("input");

    text.innerText = "You read It?";
    text.classList.add("border-bellow-field")
    readToggle.type="checkBox";
    readToggle.classList.add("card-checkbox");
    readToggle.addEventListener("click", toggleReadStatusOnBookCard);
    readToggle.checked = this.book.read;

    container.append(readToggle);
    container.append(text);
    this.cardBox.append(container);
    return this;
  }

  build() {
    this.setTitle()
      .setField("author")
      .setField("pages")
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
    iconPath.setAttribute("d",svgPath.closeButton);
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
      document.body.classList.toggle("form-on-screen");
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

let svgPath = {
  light: "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25," +
    "4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5," +
    "13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25," +
    "11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08," +
    "19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76," +
    ".17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14," +
    "15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36," +
    "12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37," +
    "20.67 14.19,20.78 17.33,17.97Z",
  dark: "M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 " +
    "18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 " +
    "20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 " +
    "1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13",
  closeButton: "M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 " +
    "17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z",
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
  const bookCard = event.currentTarget.parentElement;
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

}

function showFormOnScreen() {
  const newBookButton = document.querySelector(".display-form-button");
  newBookButton.addEventListener("click", displayFormOnScreen);
}

function displayFormOnScreen(event) {
  const form = new FormBuilder().build();
  const displayFormButton = event.target;
  document.body.prepend(form);
  document.body.classList.toggle("form-on-screen");
  displayFormButton.removeEventListener("click", displayFormOnScreen);
}

function createBookInFormSubmit(event) {
  event.preventDefault();
  if (form.checkInputsValidity()) {
    form.setInputsValidations();
  } else {
    const newBook = form.createNewBook();
    addBookToLibrary(newBook);
    document.body.classList.toggle("form-on-screen");
    removeParentContainer(event);
    showFormOnScreen();
  }
}

function toggleReadStatusOnBookCard(event) {
  const bookCard = event.currentTarget.parentElement.parentElement;
  const bookPositionInLibrary = getPositionInLibrary(bookCard);
  const book = myLibrary[bookPositionInLibrary];
  book.toggleReadStatus();
}

function removeParentContainer(event) {
  const parentContainer = event.currentTarget.parentElement;
  parentContainer.parentElement.removeChild(parentContainer)
}


function addToggleDarkModeToIcon() {
  const svgDarkMode = document.querySelector(".toggle-dark-mode");
  svgDarkMode.addEventListener("click", toggleDarkMode);
}

function toggleDarkMode(event) {
  const svgPathElement = event.currentTarget.firstElementChild
  const htmlElement = document.documentElement;

  if (htmlElement.classList.value.includes("dark")) {
    htmlElement.classList.remove("dark");
    svgPathElement.setAttribute("d", svgPath.light)
  } else {
    htmlElement.classList.add("dark");
    svgPathElement.setAttribute("d", svgPath.dark)
  }
}

addToggleDarkModeToIcon()
showFormOnScreen();