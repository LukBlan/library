function Label(labelName: string) {
  const label: HTMLLabelElement = document.createElement("label");
  label.htmlFor = labelName
  return label;
}

export { Label }