import { beforeEach, describe, expect, it } from "vitest"
import {LocalStorage} from "../../src/services/LocalStorage";

describe("LocalStorage", () => {
  beforeEach(() => {
    appLocalStorage.clear()
  })

  const appLocalStorage = new LocalStorage(localStorage);

  describe("createUser", () => {
    it("should add a new user" , () => {
      appLocalStorage.createUser("Lucas")
      expect(appLocalStorage.getUsers()).include("Lucas");
    })

    it("should create multipleUsers", () => {

    })

    it("should not create a new user when it already exist", () => {

    })
  })

  describe("deleteUser", () => {
    it("should delete given user", () => {

    })
  })

  describe("editUser", () => {
    it("should change name from given user", () => {

    })

    it("should not change name to an exising user", () => {

    })
  })
})