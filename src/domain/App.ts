
import { LoginScreen } from "../UI/LoginScreen";
import {LocalStorage} from "../services/LocalStorage";

class App {
  constructor(
    private loginScreen: LoginScreen,
    private localStorage: LocalStorage,
  ) {}

  appChange(): void {
    this.loginScreen.render(this);
  }

  getUsers(): string[] {
    return this.localStorage.getUsers();
  }

  createUser(newUserName: string): void {
    this.localStorage.createUser(newUserName);
    this.appChange()
  }
}

export { App }