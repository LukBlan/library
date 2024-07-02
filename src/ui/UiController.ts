import {App} from "../pages/App";
import {Component} from "../services/types";

class UiController {
  private currentPageComponent: Component;
  private currentErrorMessage: string;

  constructor(private componentMap: Map<string, Component>) {
    this.currentPageComponent = this.componentMap.get("login")!;
    this.currentErrorMessage = "";
  }

  render(app: App): void {
    const page: HTMLElement = this.currentPageComponent(app, this);
    document.body.innerHTML = "";
    document.body.append(page);
  }

  getErrorMessage(): string {
    return this.currentErrorMessage;
  }
}

export { UiController }