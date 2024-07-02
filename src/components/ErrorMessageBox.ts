import {UiController} from "../ui/UiController";
import {applyCssClasses} from "../services/applyCssClasses";

function ErrorMessageBox(uiController: UiController): HTMLSpanElement {
  const cssClasses: string[] = ["text-xs", "text-red", "absolute", "left-0", "top-full"]
  const span: HTMLSpanElement = document.createElement("span");
  applyCssClasses(span, cssClasses)
  span.textContent = uiController.getErrorMessage();
  return span
}

export { ErrorMessageBox };