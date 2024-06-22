import { LoginScreen } from "./ui/LoginScreen";
import { UserLoginMenu } from "./components/UserLoginMenu";

const userLoginMenu: HTMLElement = new UserLoginMenu().create();
const loginScreen: LoginScreen = new LoginScreen(userLoginMenu);
loginScreen.renderMenu()