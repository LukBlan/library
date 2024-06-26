import {test, expect, describe, beforeAll} from "vitest";
import { UserLoginMenu } from "../../src/components/UserLoginMenu";
import { LoginScreen } from "../../src/UI/LoginScreen";
import {queryByRole} from "@testing-library/dom";
import {App} from "../../src/domain/App";
import {LocalStorage} from "../../src/services/LocalStorage";

describe("UserLoginMenu", () => {
  beforeAll(() => {
    const userLoginMenu: UserLoginMenu = new UserLoginMenu();
    const loginScreen: LoginScreen = new LoginScreen(userLoginMenu);
    const appLocalStorage: LocalStorage = new LocalStorage(localStorage);
    const app: App = new App(loginScreen, appLocalStorage);
    loginScreen.render(app)
  })

  test("Should render new user form on screen", () => {
    expect(queryByRole(document.body, "form")).not.toBe(null);
  })
})
