import { applyCssClasses } from "../services/applyCssClasses";
import {App} from "../pages/App";

function Form(app: App, input: HTMLInputElement) {
  const formCssClasses: string[] = ["relative"]
  const userForm: HTMLFormElement = document.createElement("form");

  userForm.name = "form";
  applyCssClasses(userForm, formCssClasses);

  userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newUserName = input.value;
    app.createUser(newUserName);
  })

  return userForm;
}

export { Form }