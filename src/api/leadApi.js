//src/api/leadApi.js
import fetchClient from "./fetchClient";

export async function createLeadApi(payload) {
    return fetchClient.post("/api/leads", payload);
}

// -----------------------------
// GET ALL LEADS (Dashboard)
// -----------------------------
export async function getLeadsApi() {
    console.trace("🔥 getLeadsApi called==============:");
    console.log("🔥 getLeadsApi called log==============:");

    return fetchClient.get("/api/leads");
}

// -----------------------------
// GET UNSEEN COUNT (Navbar badge)
// -----------------------------
export async function getUnseenCountApi() {
    return fetchClient.get("/api/leads/unseen-count");
}

// -----------------------------
// MARK LEADS AS VIEWED
// -----------------------------
export async function markLeadsViewedApi() {
    return fetchClient.post("/api/leads/mark-viewed");
}

//  UNLOCK CONTACT (NEW)
export async function unlockContactApi(propertyId) {
    return fetchClient.post("/api/leads/unlock-contact", {
        propertyId
    });
}