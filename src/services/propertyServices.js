import ApiFetch from "./api-fetch";

export async function getProperties() {
  return await ApiFetch("/properties");
}

export async function getPropertiesactived() {
  return await ApiFetch("/actived");
}

export async function getPropertiesclosed() {
  return await ApiFetch("/closed");
}

export async function getPropertiefavorite() {
  return await ApiFetch("/favorites");
}

export async function getPropertieContacted() {
  return await ApiFetch("/contacted");
}

export async function createProperty(property_data) {
  return await ApiFetch("/properties", {
    body: property_data,
  });
}

export async function getProperty(id) {
  return await ApiFetch(`/properties/${id}`);
}
