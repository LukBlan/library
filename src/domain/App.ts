
import { LoginScreen } from "../UI/LoginScreen";

class App {
  constructor(
    // private localStorage: LocalStorage,
    private loginScreen: LoginScreen,
  ) {}

  start() {
    this.loginScreen.render(this);
  }
}

export { App }