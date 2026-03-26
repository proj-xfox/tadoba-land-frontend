import fetchClient from "./fetchClient";

export async function createLeadApi(payload) {
    return fetchClient.post("/api/leads", payload);
}