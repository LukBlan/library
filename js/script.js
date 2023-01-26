let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

showFormOnScreen()

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

function showFormOnScreen() {
  const newBookButton = document.querySelector(".create-book-button");
  newBookButton.addEventListener("click", displayInputOnScreen);
}

function displayInputOnScreen() {
  const form = formConstructor();
  const newBookButton = document.querySelector(".create-book-button");
  document.body.append(form)
  newBookButton.removeEventListener("click", displayInputOnScreen);
}

function formConstructor() {
  const form = document.createElement("form");
  const boxHeader = document.createElement("h2");
  const inputBoxName = generateInputBox("name", "text");
  const inputBoxAuthor = generateInputBox("author", "text");
  const inputBoxPages = generateInputBox("pages", "tel");
  const inputReadCheckbox = generateInputBox("read", "checkbox");
  const submitButton = document.createElement("button");
  submitButton.addEventListener("click", createNewBook)

  boxHeader.textContent = "New Book";
  submitButton.type = "submit"
  submitButton.textContent = "Add"
  submitButton.classList.add("add-book-button")
  inputReadCheckbox.classList.add("flex-row")
  form.append(boxHeader);
  form.append(inputBoxAuthor);
  form.append(inputBoxName);
  form.append(inputBoxPages);
  form.append(inputReadCheckbox);
  form.append(submitButton);
  return form;
}

function generateInputBox(id, type) {
  const inputBox = document.createElement("div");
  const inputLabel = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  inputLabel.textContent = id;
  inputLabel.setAttribute("for", id);
  input.type = type;
  input.id = id;
  inputBox.append(inputLabel);
  inputBox.append(input);
  inputBox.append(span);
  return inputBox;
}

function createNewBook(event) {
  event.preventDefault()
  const authorInput = document.getElementById("author");
  const nameInput = document.getElementById("name");
  const pagesInput = document.getElementById("pages");
  const isChecked = document.getElementById("read").checked;
  const pagesNumber = pagesInput.value;
  const bookName = nameInput.value;
  const authorName = authorInput.value;

  if (authorName === "" || bookName === "" || pagesNumber === "") {
    authorInput.setCustomValidity((authorName === "")? "Invalid field." : "");
    nameInput.setCustomValidity((bookName === "")? "Invalid field." : "");
    pagesInput.setCustomValidity((pagesNumber === "")? "Invalid field." : "");
  } else {
    addBookToLibrary(new Book(authorName, bookName, pagesNumber, isChecked))
    removeFormFromScreen()
  }
}

function removeFormFromScreen() {
  const form = document.querySelector("form")
  form.parentElement.removeChild(form)
  showFormOnScreen()
}