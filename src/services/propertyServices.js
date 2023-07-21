import ApiFetch from "./api-fetch";

export async function getProperties() {
  return await ApiFetch("/properties")
}

export async function getPropertiesactived() {
  return await ApiFetch("/actived")
}

