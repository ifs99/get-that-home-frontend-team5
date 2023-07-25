import { tokenKey } from "../config";
import ApiFetch from "./api-fetch";

export async function getUser() {
  return await ApiFetch("/profile")
}

export async function createUser(newUserData) {
  const { token, ...user} = await ApiFetch("/signup", {
    body: newUserData
  })

  sessionStorage.setItem(tokenKey, token)
  return user
}
