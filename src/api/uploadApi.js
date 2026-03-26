// src/api/uploadApi.js
import fetchClient from "./fetchClient";

export const uploadImagesApi = (files) => {
    const formData = new FormData();

    files.forEach(file => {
        formData.append("images", file);
    });

    return fetchClient.post("/api/upload/images", formData);
};