// src/api/fetchClient.js

const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL ||
    (import.meta.env.MODE === "development" ? "http://localhost:5000" : "");

// -----------------------------------------
// Get auth token from localStorage
// -----------------------------------------
function getToken() {
    return localStorage.getItem("token");
}

// -----------------------------------------
// Core request handler
// -----------------------------------------
async function request(
    endpoint,
    { method = "GET", headers = {}, body, params } = {}
) {
    const token = getToken();

    const isFormData = body instanceof FormData;

    // -----------------------------------------
    // Build URL with query params (🔥 FIX)
    // -----------------------------------------
    let url = `${API_BASE_URL}${endpoint}`;

    if (method === "GET" && params && Object.keys(params).length > 0) {
        const query = new URLSearchParams(params).toString();
        url += `?${query}`;
    }

    const config = {
        method,
        headers: {
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...headers,
        },
        ...(body
            ? {
                body: isFormData ? body : JSON.stringify(body),
            }
            : {}),
    };

    // ❌ ONLY set JSON header if NOT FormData
    if (!isFormData) {
        config.headers["Content-Type"] = "application/json";
    }

    console.log(`➡ ${method} ${url}`, body || "");

    let payload = {};
    let res;

    try {
        res = await fetch(url, config);
        const text = await res.text();
        payload = text ? JSON.parse(text) : {};

        if (res.status === 401) {
            localStorage.clear();
            alert("Session expired. Please login again.");
            window.location.href = "/login";
            return;
        }
    } catch (err) {
        console.error("Fetch error:", err);
        console.error("❌ NON-JSON RESPONSE RECEIVED");
        console.error("👉 URL:", url);
        console.error("👉 STATUS:", res?.status);
        console.error("👉 RAW RESPONSE:", payload);
        throw new Error("Network error");
    }

    if (!res.ok) {
        const message = payload.message || payload.error || "Request failed";
        throw new Error(message);
    }

    return payload;
}

// -----------------------------------------
// Public API wrapper methods
// -----------------------------------------
const fetchClient = {
    get: (url, options = {}) =>
        request(url, { ...options, method: "GET" }),

    post: (url, body, options = {}) =>
        request(url, { ...options, method: "POST", body }),

    put: (url, body, options = {}) =>
        request(url, { ...options, method: "PUT", body }),

    patch: (url, body, options = {}) =>
        request(url, { ...options, method: "PATCH", body }),

    delete: (url, options = {}) =>
        request(url, { ...options, method: "DELETE" }),
};

export default fetchClient;