import {UserLoginMenu} from "../components/UserLoginMenu";
import {App} from "../domain/App";

class LoginScreen {
  private errorMessage: string
  constructor(
    private userLoginMenu: UserLoginMenu,
  ) {
    this.errorMessage = "";
  }

  setErrorMessage(message: string) {
    this.errorMessage = message;
  }

  render(app: App) {
    const userMenu: HTMLElement = this.userLoginMenu.create(app, this.errorMessage);
    this.errorMessage = "";
    document.body.innerHTML = "";
    document.body.append(userMenu);
  }
}

export { LoginScreen }