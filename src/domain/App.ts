
import { LoginScreen } from "../UI/LoginScreen";
import {LocalStorage} from "../services/LocalStorage";

class App {
  constructor(
    private loginScreen: LoginScreen,
    private localStorage: LocalStorage,
  ) {}

  start() {
    this.loginScreen.render(this);
  }
}

export { App }