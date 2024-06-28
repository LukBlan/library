import { beforeEach, describe, expect, it } from "vitest"
import {LocalStorage} from "../../src/services/LocalStorage";
import {notEmptyUsers} from "../../src/validations/not-empty-users";

describe("LocalStorage", () => {
  beforeEach(() => {
    appLocalStorage.clear()
  })

  const appLocalStorage: LocalStorage = new LocalStorage(localStorage, [notEmptyUsers]);

  describe("createUser", () => {
    it("should add a new user" , () => {
      appLocalStorage.createUser("Lucas")
      expect(appLocalStorage.getUsers()).include("Lucas");
    })

    it("should create multipleUsers", () => {

    })

    it("should not create an empty user", () => {
      expect(() => {appLocalStorage.createUser("")}).toThrowError();
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