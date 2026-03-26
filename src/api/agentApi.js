// src/api/agentApi.js
import fetchClient from "./fetchClient";

// 🔥 GET TOP AGENTS
export const getTopAgentsApi = () => {
    return fetchClient.get("/api/agents/top");
};