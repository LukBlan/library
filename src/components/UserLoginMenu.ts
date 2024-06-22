import {applyCssClasses} from "../services/applyCssClasses";
import "./UserLoginMenu.css"

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

  createUserMenu(): HTMLElement {
    const userMenu: HTMLElement = document.createElement("section");
    return userMenu
  }

  create(): HTMLElement {
    const userSection: HTMLElement = this.createUserSection();
    const userMenu: HTMLElement = this.createUserMenu();
    const newUserForm: HTMLFormElement = this.newUserForm();

    userMenu.append(newUserForm);
    userSection.append(userMenu);

    return userSection;
  }
}

export { UserLoginMenu }