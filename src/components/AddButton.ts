import {applyCssClasses} from "../services/applyCssClasses";

function AddButton(text: string) {
  const buttonCssClasses: string[] = ["absolute", "right-0", "px-1.5"];
  const button: HTMLButtonElement = document.createElement("button");
  applyCssClasses(button, buttonCssClasses);
  button.textContent = text;
  return button;
}

export { AddButton }