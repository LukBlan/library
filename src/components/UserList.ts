import { applyCssClasses } from "../services/applyCssClasses";
import { App } from "../pages/App";

function UserList(app: App) {
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

export { UserList }