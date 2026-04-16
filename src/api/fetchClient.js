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
    // Build URL
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

    if (!isFormData) {
        config.headers["Content-Type"] = "application/json";
    }

    console.log(`➡ ${method} ${url}`, body || "");

    let res;
    let payload;

    try {
        res = await fetch(url, config);

        // ✅ Safe JSON parsing
        try {
            payload = await res.json();
        } catch (jsonErr) {
            const text = await res.text();

            console.error("❌ NON-JSON RESPONSE RECEIVED");
            console.error("👉 URL:", url);
            console.error("👉 STATUS:", res.status);
            console.error("👉 RAW RESPONSE:", text);

            throw {
                success: false,
                code: "NON_JSON_RESPONSE",
                message: "Server returned invalid response",
            };
        }

        // -----------------------------------------
        // Handle auth expiry
        // -----------------------------------------
        if (res.status === 401 && payload?.code === "UNAUTHORIZED") {
            // 🔐 Only for token/session expiry
            localStorage.clear();
            alert("Session expired. Please login again.");
            window.location.href = "/";
            return;
        }

    } catch (err) {
        console.error("Fetch error:", err);

        // 🔥 Preserve backend error if exists
        if (err?.code) {
            throw err;
        }

        throw {
            success: false,
            code: "NETWORK_ERROR",
            message: "Network error. Please try again.",
        };
    }

    // -----------------------------------------
    // Handle non-OK responses
    // -----------------------------------------
    if (!res.ok) {
        // 🔥 IMPORTANT: preserve full backend error
        throw payload;
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