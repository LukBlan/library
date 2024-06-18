import {applyCssClasses} from "../services/applyCssClasses";
import "./UserLoginMenu.css"

class UserLoginMenu {
  createUserSection(): HTMLElement {
    const tailwindClassList = [
      "grid", "justify-center", "content-center",
      "bg-violet-light", "dark:bg-black"
    ];
    const userSection: HTMLElement = document.createElement("section");
    applyCssClasses(userSection, tailwindClassList);
    return userSection;
  }

  createUserMenu(): HTMLUListElement {
    const tailwindClassList = [
      "text-2xl", "md:text-4xl", "2xl:text-6xl",
      "text-center", "shadow-md", "cursor-pointer", "enter-from-left",
      "bg-white"
    ];
    const userMenu: HTMLUListElement = document.createElement("ul");
    applyCssClasses(userMenu, tailwindClassList);
    return userMenu;
  }

  createUserOption(text: string): HTMLLIElement {
    const tailwindClassList = [
      "py-6", "px-6",
      "hover:bg-violet", "hover:text-white"
    ];
    const newUserOption: HTMLLIElement = document.createElement("li");
    applyCssClasses(newUserOption, tailwindClassList);
    newUserOption.innerText = text;
    return newUserOption;
  }

  create(): HTMLElement {
    const userSection: HTMLElement = this.createUserSection();
    const userMenu: HTMLUListElement = this.createUserMenu();
    const newUserOption: HTMLLIElement = this.createUserOption("Create User");
    const selectUserOption: HTMLLIElement = this.createUserOption("Select User");
    const deleteUserOption: HTMLLIElement = this.createUserOption("Delete User");

    userSection.append(userMenu);
    userMenu.append(selectUserOption);
    userMenu.append(newUserOption);
    userMenu.append(deleteUserOption);

    return userSection
  }
}

export { UserLoginMenu }