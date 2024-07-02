function notEmptyUsers(username: string) {
  const emptyUsername = username.length === 0;

    if (emptyUsername) {
      throw new Error("Users name can't be empty")
    }

    return !emptyUsername;
}

export { notEmptyUsers }