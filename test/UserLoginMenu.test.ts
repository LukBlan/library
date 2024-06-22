import {test, expect, describe, beforeAll} from "vitest";
import { UserLoginMenu } from "../src/components/UserLoginMenu";
import { LoginScreen } from "../src/ui/LoginScreen";
import {queryByRole} from "@testing-library/dom";

describe("UserLoginMenu", () => {
  beforeAll(() => {
    const userLoginMenu: HTMLElement = new UserLoginMenu().create();
    const loginScreen: LoginScreen = new LoginScreen(userLoginMenu);
    loginScreen.renderMenu()
  })

  test("Should render new user form on screen", () => {
    expect(queryByRole(document.body, "form")).not.toBe(null);
  })
})
