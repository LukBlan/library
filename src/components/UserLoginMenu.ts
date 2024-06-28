import {applyCssClasses} from "../services/applyCssClasses";
import "./UserLoginMenu.css"
import {App} from "../domain/App";

class UserLoginMenu {
  createUserSection(): HTMLElement {
    const tailwindClassList: string[] = [
      "grid", "justify-center", "content-center",
      "bg-violet-light", "dark:bg-black"
    ];
    const userSection: HTMLElement = document.createElement("main");
    applyCssClasses(userSection, tailwindClassList);
    return userSection;
  }

  addUserForm(input: HTMLInputElement, app: App) {
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

  addUserButton() {
    const buttonCssClasses: string[] = ["absolute", "right-0", "px-1.5"]
    const button: HTMLButtonElement = document.createElement("button");
    applyCssClasses(button, buttonCssClasses);
    button.textContent = "+";
    return button;
  }

  createErrorMessage(message: string) {
    const span: HTMLSpanElement = document.createElement("span");
    span.textContent = message;
    return span
  }

  newUserForm(app: App, errorMessage: string): HTMLFormElement {
    const errorMessageBox: HTMLSpanElement = this.createErrorMessage(errorMessage)
    const input: HTMLInputElement = document.createElement("input")
    const label: HTMLLabelElement = document.createElement("label");
    const userForm: HTMLFormElement = this.addUserForm(input, app)
    const addUserButton: HTMLButtonElement = this.addUserButton();

    label.htmlFor = "newUser"
    input.name = "newUser"
    input.classList.add("text-center")
    input.id = "newUser"
    input.placeholder = "Create new User"

    userForm.append(label);
    userForm.append(input);
    userForm.append(addUserButton);
    userForm.append(errorMessageBox);

    return userForm;
  }

  createUserMenuContainer(): HTMLElement {
    const userMenuClasses = [
      "flex", "flex-col", "gap-2", "shadow",
      "p-2", "bg-violet", "rounded", "max-h-[50vh]", "overflow-y-scroll"
    ]
    const userMenuContainer: HTMLElement = document.createElement("section");
    applyCssClasses(userMenuContainer, userMenuClasses)
    return userMenuContainer
  }

  createUsersList(app: App) {
    const usersListElement: HTMLUListElement = document.createElement("ul");
    const userElementClasses = [
      "py-2", "px-1", "text-white", "font-bold",
      "hover:text-white", "hover:bg-violet-semi-light",
      "leading-none", "cursor-pointer", "border-t", "border-b", "border-white/10",
      "transition-colors"
    ]

    const users = app.getUsers();

    users.forEach(user => {
      const userLiElement = document.createElement("li");
      userLiElement.innerText = user;
      applyCssClasses(userLiElement, userElementClasses)
      usersListElement.append(userLiElement);
    })


    return usersListElement;
  }

  create(app: App, errorMessage: string): HTMLElement {
    const userSection: HTMLElement = this.createUserSection();
    const userMenuContainer: HTMLElement = this.createUserMenuContainer();
    const newUserForm: HTMLFormElement = this.newUserForm(app, errorMessage);
    const usersList: HTMLUListElement = this.createUsersList(app);

    userSection.append(userMenuContainer);
    userMenuContainer.append(newUserForm);
    userMenuContainer.append(usersList);

    return userSection;
  }
}

export { UserLoginMenu }