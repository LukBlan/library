import { App } from "../pages/App";
import { UiController } from "../ui/UiController";

export type Component = (app: App, uiController: UiController) => HTMLElement