import {LocalStorage} from "../services/LocalStorage";
import {UiController} from "../ui/UiController";

class App {
  constructor(
    private uiController: UiController,
    private localStorage: LocalStorage
  ) {}

  appChange(): void {
    this.uiController.render(this);
  }

  getUsers(): string[] {
    return this.localStorage.getUsers();
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

      this.uiController.setErrorMessage(message)
    }

    this.appChange()
  }
}

export { App }