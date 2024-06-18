class LoginScreenUi {
  constructor(private menuElement: HTMLElement) {

  }

  renderMenu(): void {
    document.body.append(this.menuElement)
  }
}

export { LoginScreenUi }