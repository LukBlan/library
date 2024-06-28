function notEmptyUsers(username: string) {
  const emptyUsername = username.length === 0;

    if (emptyUsername) {
      throw new Error("Users name need to have 1 character or more")
    }

    return !emptyUsername;
}

export { notEmptyUsers }