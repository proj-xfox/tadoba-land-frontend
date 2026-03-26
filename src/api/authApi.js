import fetchClient from "./fetchClient";

export async function signupApi(payload) {
    return fetchClient.post("/api/auth/signup", payload);
}

export async function loginApi(payload) {
    return fetchClient.post("/api/auth/login", payload);
}