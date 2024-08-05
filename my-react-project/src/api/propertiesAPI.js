import * as request from "./requester";

const BASE_URL = "http://localhost:3030/data/properties";

export const getAll = async () => {
  const result = await request.get(BASE_URL);
  const properties = Object.values(result);

  return properties;
};

export const getOne = (propertyId) => request.get(`${BASE_URL}/${propertyId}`);

export const createProperty = (propertyData) => request.post(BASE_URL, propertyData);

export const getOwned = (ownerId) => request.get(`${BASE_URL}/?where=_ownerId%3D%22${ownerId}%22&`);

export const removeProperty = (propertyId) => request.del(`${BASE_URL}/${propertyId}`);

export const updateProperty = (propertyId, propertyData) => request.put(`${BASE_URL}/${propertyId}`, propertyData)