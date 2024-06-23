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

  newUserForm(): HTMLFormElement {
    const userForm: HTMLFormElement = document.createElement("form");
    const label: HTMLLabelElement = document.createElement("label");
    const input: HTMLInputElement = document.createElement("input")
    const button: HTMLButtonElement = document.createElement("button");

    userForm.name = "form";
    button.innerText = "+";

    userForm.append(label);
    userForm.append(input);
    userForm.append(button);

    return userForm;
  }

  createUserMenuContainer(): HTMLElement {
    const userMenuContainer: HTMLElement = document.createElement("section");
    return userMenuContainer
  }

  create(app: App): HTMLElement {
    app
    const userSection: HTMLElement = this.createUserSection();
    const userMenuContainer: HTMLElement = this.createUserMenuContainer();
    const newUserForm: HTMLFormElement = this.newUserForm();

    userMenuContainer.append(newUserForm);
    userSection.append(userMenuContainer);

    return userSection;
  }
}

export { UserLoginMenu }