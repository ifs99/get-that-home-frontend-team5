import ApiFetch from "./api-fetch";

export async function getUser() {
  return await ApiFetch("/profile")
}