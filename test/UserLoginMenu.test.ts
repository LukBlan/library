import { test, expect, describe } from "vitest";
import { UserLoginMenu } from "../src/components/UserLoginMenu";
import { LoginScreenUi } from "../src/ui/LoginScreenUi";
import { queryByText } from "@testing-library/dom";

describe("UserLoginMenu", () => {
  test("Should render user menu on screen", () => {
    const userLoginMenu: HTMLElement = new UserLoginMenu().create();
    const loginScreen: LoginScreenUi = new LoginScreenUi(userLoginMenu);
    loginScreen.renderMenu()
    const body = document.body;
    expect(queryByText(body, "Create User")).not.toBe(null);
  })
})
