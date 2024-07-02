import { App } from "./pages/App";
import { LocalStorage } from "./services/LocalStorage";
import { notEmptyUsers } from "./validations/not-empty-users";
import { UiController } from "./ui/UiController";
import { Login } from "./pages/login/Login";
import {Component} from "./services/types";

const localStorageValidations: ((username: string) => boolean)[] = [notEmptyUsers]
const appLocalStorage: LocalStorage = new LocalStorage(localStorage, localStorageValidations)

const componentsMap = new Map<string, Component>();
componentsMap.set("login", Login)

const uiController: UiController = new UiController(componentsMap);

const app = new App(uiController, appLocalStorage);
app.appChange();