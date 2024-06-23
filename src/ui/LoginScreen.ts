import {UserLoginMenu} from "../components/UserLoginMenu";
import {App} from "../domain/App";

class LoginScreen {
  constructor(
    private userLoginMenu: UserLoginMenu,
  ) {
  }

  render(app: App) {
    const userMenu: HTMLElement = this.userLoginMenu.create(app);
    document.body.append(userMenu)
  }
}

export { LoginScreen }