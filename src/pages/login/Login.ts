import { App } from "../App";
import { UiController } from "../../ui/UiController";
import { applyCssClasses } from "../../services/applyCssClasses";
import {NewUserForm} from "../../components/NewUserForm";
import {UserList} from "../../components/UserList";

function Login(app: App, uiController: UiController): HTMLElement {
  const loginPageClasses: string[] = ["grid", "justify-center", "content-center", "bg-violet-light", "dark:bg-black"];
  const userMenuContainerClasses = [
    "flex", "flex-col", "gap-4", "shadow",
    "p-2", "bg-violet", "rounded", "max-h-[50vh]", "overflow-y-scroll"
  ]

  const loginPage: HTMLElement = document.createElement("main");
  const userMenuContainer: HTMLElement = document.createElement("section");
  const newUserForm: HTMLFormElement = NewUserForm(app, uiController);
  const usersList: HTMLUListElement = UserList(app)

  applyCssClasses(userMenuContainer, userMenuContainerClasses)
  applyCssClasses(loginPage, loginPageClasses);

  loginPage.append(userMenuContainer);
  userMenuContainer.append(newUserForm);
  userMenuContainer.append(usersList);

  return loginPage;
}

export { Login }