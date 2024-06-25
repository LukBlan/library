import { LoginScreen } from "./UI/LoginScreen";
import { UserLoginMenu } from "./components/UserLoginMenu";
import { App } from "./domain/App";
import { LocalStorage } from "./services/LocalStorage";

const appLocalStorage: LocalStorage = new LocalStorage(localStorage)
const userLoginMenu: UserLoginMenu = new UserLoginMenu();
const loginScreen: LoginScreen = new LoginScreen(userLoginMenu);
const app = new App(loginScreen, appLocalStorage);
app.start();