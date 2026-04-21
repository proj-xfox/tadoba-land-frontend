// src/components/auth/LoginSignupModal.jsx
import { useState } from "react";
import { loginApi, signupApi } from "../../api/authApi";
import { useAuth } from "../../context/AuthContext"; // ✅ NEW
import toast from "react-hot-toast";

function LoginSignupModal({ isOpen, onClose, onSuccess }) {

    const { login } = useAuth(); // ✅ NEW

    const [mode, setMode] = useState("login"); // login | signup
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async () => {
        try {
            // ✅ validation
            if (!phone || !password || (mode === "signup" && !name)) {
                toast.error("Please fill all required fields");
                return;
            }

            if (mode === "signup" && password !== confirmPassword) {
                toast.error("Passwords do not match");
                return;
            }

            setLoading(true);

            let res;

            // ✅ LOGIN
            if (mode === "login") {
                res = await loginApi({ phone, password });
            }
            // ✅ SIGNUP
            else {
                res = await signupApi({
                    name,
                    phone,
                    password,
                    role: "BUYER"
                });
            }

            // 🔥 IMPORTANT CHANGE → use context instead of localStorage
            login(res.user, res.token);

            onSuccess(); // continue flow
            onClose();   // optional but better UX

        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">

            <div className="bg-white rounded-lg w-full max-w-md p-6 relative">

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500"
                >
                    ✕
                </button>

                {/* Header */}
                <h2 className="text-lg font-semibold mb-4">
                    {mode === "login"
                        ? "Login to view contact details"
                        : "Create account to continue"}
                </h2>

                {/* Form */}
                <div className="space-y-3">

                    {/* NAME */}
                    {mode === "signup" && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border px-3 py-2 rounded"
                        />
                    )}

                    {/* MOBILE */}
                    <div className="flex border rounded overflow-hidden">
                        <span className="px-3 flex items-center bg-gray-100 text-sm">
                            +91
                        </span>

                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-3 py-2 outline-none"
                        />
                    </div>

                    {/* PASSWORD */}
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                    />

                    {/* CONFIRM PASSWORD */}
                    {mode === "signup" && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full border px-3 py-2 rounded"
                        />
                    )}

                    {/* BUTTON */}
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-full bg-green-700 text-white py-2 rounded disabled:opacity-50"
                    >
                        {loading
                            ? "Please wait..."
                            : mode === "login"
                                ? "Login"
                                : "Create Account"}
                    </button>

                    {/* TOGGLE */}
                    <p className="text-sm text-center text-gray-600">
                        {mode === "login"
                            ? "Don't have an account?"
                            : "Already have an account?"}
                        <span
                            onClick={() =>
                                setMode(mode === "login" ? "signup" : "login")
                            }
                            className="text-green-700 ml-1 cursor-pointer"
                        >
                            {mode === "login" ? "Sign up" : "Login"}
                        </span>
                    </p>

                </div>

            </div>
        </div>
    );
}

export default LoginSignupModal;