import {App} from "../pages/App";
import {UiController} from "../ui/UiController";
import { ErrorMessageBox } from "./ErrorMessageBox";
import { Input } from "./Input";
import { Form } from "./Form";
import { AddButton } from "./AddButton";
import {Label} from "./Label";

function NewUserForm(app: App, uiController: UiController): HTMLFormElement {
  const errorMessageBox: HTMLSpanElement = ErrorMessageBox(uiController);
  const userInput: HTMLInputElement = Input("newUser", "Create New User");
  const userLabel: HTMLLabelElement = Label("newUser")
  const userForm: HTMLFormElement = Form(app, userInput);
  const addUserButton: HTMLButtonElement = AddButton("+");

  userForm.append(userLabel);
  userForm.append(userInput);
  userForm.append(addUserButton);
  userForm.append(errorMessageBox);

  return userForm;
}

export { NewUserForm }