
import { LoginScreen } from "../ui/LoginScreen";
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

  setMessageError(message: string) {
    this.loginScreen.setErrorMessage(message);
  }

  createUser(newUserName: string): void {
    try {
      this.localStorage.createUser(newUserName);
    } catch (error) {
      let message: string;

      if (error instanceof Error) {
        message = error.message
      } else {
        message = String(Error)
      }

      this.setMessageError(message)
    }

    this.appChange()
  }
}

export { App }