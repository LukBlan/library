import { LoginScreen } from "./ui/LoginScreen";
import { UserLoginMenu } from "./components/UserLoginMenu";
import { App } from "./domain/App";
import { LocalStorage } from "./services/LocalStorage";
import {notEmptyUsers} from "./validations/not-empty-users";

const localStorageValidations: ((username: string) => boolean)[] = [notEmptyUsers]
const appLocalStorage: LocalStorage = new LocalStorage(localStorage, localStorageValidations)
const userLoginMenu: UserLoginMenu = new UserLoginMenu();
const loginScreen: LoginScreen = new LoginScreen(userLoginMenu);
const app = new App(loginScreen, appLocalStorage);
app.appChange();