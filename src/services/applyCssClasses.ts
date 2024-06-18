function applyCssClasses(element: HTMLElement, classList: string[]) {
  classList.forEach((tailwindClass: string) => element.classList.add(tailwindClass))
}

export { applyCssClasses }