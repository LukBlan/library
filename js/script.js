let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

showInputOnClick()

function showInputOnClick() {
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
  return form
}

function generateInputBox(id, type) {
  const inputBox = document.createElement("div");
  const inputLabel = document.createElement("label");
  const input = document.createElement("input");

  inputLabel.textContent = id
  inputLabel.setAttribute("for", id);
  input.type = type;
  input.id = id;
  inputBox.append(inputLabel);
  inputBox.append(input);
  return inputBox;
}