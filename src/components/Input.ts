function Input(labelName: string, text: string) {
  const input: HTMLInputElement = document.createElement("input");

  input.name = labelName;
  input.classList.add("text-center");
  input.id = labelName;
  input.placeholder = text;

  return input;
}

export { Input }