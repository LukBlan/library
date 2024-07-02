import {UiController} from "../ui/UiController";

function ErrorMessageBox(uiController: UiController): HTMLSpanElement {
  const span: HTMLSpanElement = document.createElement("span");
  span.textContent = uiController.getErrorMessage();
  return span
}

export { ErrorMessageBox };