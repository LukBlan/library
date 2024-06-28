import {test, expect, describe, beforeAll, beforeEach} from "vitest";
import { UserLoginMenu } from "../../src/components/UserLoginMenu";
import { LoginScreen } from "../../src/ui/LoginScreen";
import {fireEvent, getByPlaceholderText, getByRole, getByText, queryByRole, screen} from "@testing-library/dom";
import {App} from "../../src/domain/App";
import {LocalStorage} from "../../src/services/LocalStorage";
import {notEmptyUsers} from "../../src/validations/not-empty-users";

describe("UserLoginMenu", () => {
  const userLoginMenu: UserLoginMenu = new UserLoginMenu();
  const loginScreen: LoginScreen = new LoginScreen(userLoginMenu);
  const localStorageValidations: ((username: string) => boolean)[] = [notEmptyUsers]
  const appLocalStorage: LocalStorage = new LocalStorage(localStorage, localStorageValidations);
  const app: App = new App(loginScreen, appLocalStorage);

  beforeAll(() => {
    loginScreen.render(app)
  })

  beforeEach(() => {
    localStorage.clear();
  })

  test("Should render new user form on screen", () => {
    expect(screen.queryByRole("form")).not.toBe(null);
  })

  test("should display a new user when it is create in the form", () => {
    const form = screen.getByRole("form");
    const newUserInput = getByPlaceholderText(form, "Create new User");
    const sendButton = getByText(form, "+")

    fireEvent.change(newUserInput, {target: "Lucas"})
    fireEvent.click(sendButton);
    expect(screen.getByRole("list")).not.toBe(null);
  })

  test("should display a message error when creating empty user", () => {
    const form = screen.getByRole("form");
    fireEvent.change(form, {target: ""})
    expect(screen.getByText("Users name need to have 1 character or more")).not.toBe(null);
  })
})
