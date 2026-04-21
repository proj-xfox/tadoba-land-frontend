//src/api/authApi.js
import fetchClient from "./fetchClient";

export async function signupApi(payload) {
    return fetchClient.post("/api/auth/signup", payload);
}

export async function loginApi(payload) {
    return fetchClient.post("/api/auth/login", payload);
}

export async function setPasswordApi(payload) {
    return fetchClient.post("/api/auth/set-password", payload);
}

//  get logged-in user
export async function getMeApi() {
    return fetchClient.get("/api/auth/me");
}

// update logged-in user
export async function updateUserApi(payload) {
    return fetchClient.put("/api/auth/me", payload);
}

export const upgradeRoleApi = (data) => {
    return fetchClient.put("/api/auth/upgrade-role", data);
};