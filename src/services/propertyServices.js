import ApiFetch from "./api-fetch";

export async function getProperties() {
  return await ApiFetch("/properties")
}

export async function createProperty({property_data}) {
  
}
