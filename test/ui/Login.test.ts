import {test, expect, describe, beforeAll, beforeEach} from "vitest";
import {fireEvent, getByPlaceholderText, getByText, screen} from "@testing-library/dom";
import {App} from "../../src/pages/App";
import {LocalStorage} from "../../src/services/LocalStorage";
import {notEmptyUsers} from "../../src/validations/not-empty-users";
import {UiController} from "../../src/ui/UiController";
import {Component} from "../../src/services/types";
import {Login} from "../../src/pages/login/Login";

describe("UserLoginMenu", () => {
  // @ts-expect-error - Webstorm missing map bug
  const componentsMap = new Map<string, Component>();
  componentsMap.set("login", Login)
  const uiController: UiController = new UiController(componentsMap);
  const localStorageValidations: ((username: string) => boolean)[] = [notEmptyUsers]
  const appLocalStorage: LocalStorage = new LocalStorage(localStorage, localStorageValidations);
  const app: App = new App(uiController, appLocalStorage);

  beforeAll(() => {
    uiController.render(app)
  })

  beforeEach(() => {
    localStorage.clear();
  })

  test("Should render new user form on screen", () => {
    expect(screen.queryByRole("form")).not.toBe(null);
  })

  test("should display a new user when it is create in the form", () => {
    const form = screen.getByRole("form");
    const newUserInput = getByPlaceholderText(form, "Create New User");
    const sendButton = getByText(form, "+")

    fireEvent.change(newUserInput, {target: "Lucas"})
    fireEvent.click(sendButton);
    expect(screen.getByRole("list")).not.toBe(null);
  })

  test("should display a message error when creating empty user", () => {
    const form = screen.getByRole("form");
    fireEvent.change(form, {target: ""})
    expect(screen.getByText("Users name can't be empty")).not.toBe(null);
  })
})
