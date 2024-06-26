import {applyCssClasses} from "../services/applyCssClasses";
import "./UserLoginMenu.css"
import {App} from "../domain/App";

class UserLoginMenu {
  createUserSection(): HTMLElement {
    const tailwindClassList = [
      "grid", "justify-center", "content-center",
      "bg-violet-light", "dark:bg-black"
    ];
    const userSection: HTMLElement = document.createElement("main");
    applyCssClasses(userSection, tailwindClassList);
    return userSection;
  }

  newUserForm(app: App): HTMLFormElement {
    const userForm: HTMLFormElement = document.createElement("form");
    const label: HTMLLabelElement = document.createElement("label");
    const input: HTMLInputElement = document.createElement("input")
    const button: HTMLButtonElement = document.createElement("button");

    userForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const newUserName = input.value;
      app.createUser(newUserName);
    })

    label.htmlFor = "newUser"
    input.name = "newUser"
    input.id = "newUser"
    input.placeholder = "Create new User"
    userForm.name = "form";
    button.textContent = "+";

    userForm.append(label);
    userForm.append(input);
    userForm.append(button);

    return userForm;
  }

  createUserMenuContainer(): HTMLElement {
    const userMenuClasses = ["shadow", "p-2", "bg-violet", "rounded"]
    const userMenuContainer: HTMLElement = document.createElement("section");
    applyCssClasses(userMenuContainer, userMenuClasses)
    return userMenuContainer
  }

  createUsersList(app: App) {
    const usersListElement: HTMLUListElement = document.createElement("ul");
    const userElementClasses = [
      "py-2", "px-1", "text-white", "font-bold",
      "hover:text-white", "hover:bg-violet-semi-light",
      "leading-none", "cursor-pointer"
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

  create(app: App): HTMLElement {
    const userSection: HTMLElement = this.createUserSection();
    const userMenuContainer: HTMLElement = this.createUserMenuContainer();
    const newUserForm: HTMLFormElement = this.newUserForm(app);
    const usersList: HTMLUListElement = this.createUsersList(app);

    userSection.append(userMenuContainer);
    userMenuContainer.append(newUserForm);
    userMenuContainer.append(usersList);

    return userSection;
  }
}

export { UserLoginMenu }