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
  try {
    return await ApiFetch(`/properties/${id}`);
  } catch (error) {
    return { error: 'Failed to get property' };
  }
}

export async function createFavorite(id) {
  return await ApiFetch(`/favorites/${id}`, {
      body: {
          "favorite":true
      },
    }
  
  );
}

export async function checkFavorite(id) {
  return await ApiFetch(`/interaction/${id}`);
}

export async function closeProperty(id) {
  return await ApiFetch(`/actived/${id}`, {
    body: {
      "actived": false,
      "closed": true
    },
    method: "PATCH" 
  });
}





