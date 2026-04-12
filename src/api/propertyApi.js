// src/api/propertyApi.js
import fetchClient from "./fetchClient";

// ✅ CREATE PROPERTY
export const createPropertyApi = (data) => {
    return fetchClient.post("/api/properties", data);
};

export const getFeaturedPropertiesApi = () => {
    return fetchClient.get("/api/properties/featured");
};

// 🔥 ADD IMAGES TO PROPERTY (NEW)
export const addPropertyImagesApi = (data) => {
    return fetchClient.post("/api/properties/images", data);
};

// 🔥 ACTIVATE PROPERTY (NEW)
export const activatePropertyApi = (propertyId) => {
    return fetchClient.patch(`/api/properties/${propertyId}/activate`);
};

/* export const getOwnerPropertiesApi = () => {
    return fetchClient.get("/api/properties/owner");
};

export const getAgentPropertiesApi = () => {
    return fetchClient.get("/api/properties/agent");
}; */


export const getOwnerPropertiesApi = (params = {}) => {
    return fetchClient.get("/api/properties/owner", { params });
};

export const getAgentPropertiesApi = (params = {}) => {
    return fetchClient.get("/api/properties/agent", { params });
};


export const getPropertyByIdApi = (id) => {
    return fetchClient.get(`/api/properties/${id}`);
};

export const getPropertiesApi = (params) => {
    return fetchClient.get("/api/properties", { params });
};

