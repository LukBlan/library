import { LoginScreenUi } from "./ui/LoginScreenUi";
import { UserLoginMenu } from "./components/UserLoginMenu";

const userLoginMenu: HTMLElement = new UserLoginMenu().create();
const loginScreen: LoginScreenUi = new LoginScreenUi(userLoginMenu);
loginScreen.renderMenu()