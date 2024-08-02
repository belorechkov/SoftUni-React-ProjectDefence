import { useEffect, useState } from "react";
import { getAll, getOne } from "../api/propertiesAPI";

export function useGetAllProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getAll().then((result) => setProperties(result));
  }, []);

  return [properties, setProperties];
}

export function useGetOneProperty(propertyId) {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    getOne(propertyId).then((property) => setProperty(property));
  }, []);

  return [property, setProperty];
}
