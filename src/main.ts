import { LoginScreen } from "./UI/LoginScreen";
import { UserLoginMenu } from "./components/UserLoginMenu";
import {App} from "./domain/App";


const userLoginMenu: UserLoginMenu = new UserLoginMenu();
const loginScreen: LoginScreen = new LoginScreen(userLoginMenu);
const app = new App(loginScreen);
app.start();