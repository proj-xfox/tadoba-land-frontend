// src/api/agentApi.js
import fetchClient from "./fetchClient";

// 🔥 GET TOP AGENTS
export const getTopAgentsApi = () => {
    return fetchClient.get("/api/agents/top");
};

// ✅ GET MY PROFILE
export const getMyAgentProfileApi = () => {
    return fetchClient.get("/api/agents/profile/me");
};

// ✅ CREATE / UPDATE PROFILE
export const saveAgentProfileApi = (data) => {
    return fetchClient.post("/api/agents/profile", data);
};

export const getAgentBySlugApi = (slug) => {
    return fetchClient.get(`/api/agents/${slug}`);
};