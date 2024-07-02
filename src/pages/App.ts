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
    this.localStorage.createUser(newUserName);

    // try {
    //
    // } catch (error) {
    //   let message: string;
    //
    //   if (error instanceof Error) {
    //     message = error.message
    //   } else {
    //     message = String(Error)
    //   }
    //
    //   this.setMessageError(message)
    // }

    this.appChange()
  }
}

export { App }