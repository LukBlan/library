class LocalStorage {
  constructor(private localStorage: Storage) {}

  createUser(userName: string): void {
    const users = this.getUsers()
    const newUsers = [...users, userName]
    this.setUsers(newUsers);
  }

  // deleteUser(userName) {}
  //
  // editUser(userName, newUsername) {}

  setUsers(users: string[]): void {
    const jsonUsers: string = JSON.stringify(users);
    localStorage.setItem("users", jsonUsers)
  }

  getUsers(): string[] {
    const localStorageContent: string | undefined | null = localStorage.getItem("users")

    if (!localStorageContent) {
      return []
    }

    return JSON.parse(localStorageContent);
  }

  clear() {
    this.localStorage.clear();
  }
}

export { LocalStorage }