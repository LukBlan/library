import "./UserLoginMenu.css"

class UserLoginMenu {
  create(): HTMLElement {
    const userSection: HTMLElement = document.createElement("section");
    const userMenu: HTMLUListElement = document.createElement("ul");
    const newUserOption: HTMLLIElement = document.createElement("li");
    const selectUserOption: HTMLLIElement = document.createElement("li");
    const deleteUserOption: HTMLLIElement = document.createElement("li");

    userSection.classList.add("user-section");
    userMenu.classList.add("user-menu");
    selectUserOption.innerText = "Select User";
    newUserOption.innerText = "Create User";
    deleteUserOption.innerText = "Delete User";

    userSection.append(userMenu);
    userMenu.append(selectUserOption);
    userMenu.append(newUserOption);
    userMenu.append(deleteUserOption);

    return userSection
  }
}

export { UserLoginMenu }