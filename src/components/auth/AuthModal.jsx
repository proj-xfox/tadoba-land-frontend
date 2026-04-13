// src/components/auth/AuthModal.jsx

import { useState, useEffect } from "react";
import { Loader2, LogIn, UserPlus } from "lucide-react";
import { loginApi, signupApi } from "../../api/authApi";
import { useAuth } from "../../context/AuthContext";
import { getMyAgentProfileApi, saveAgentProfileApi } from "../../api/agentApi";
import AgentProfileModal from "../agent/AgentProfileModal";

function AuthModal({ isOpen, onClose, defaultMode = "login" }) {

    const { login } = useAuth();

    // 🔥 MODE SWITCH
    const [mode, setMode] = useState(defaultMode);

    useEffect(() => {
        if (isOpen) {
            setMode(defaultMode);
        }
    }, [defaultMode, isOpen]);

    // LOGIN STATE
    const [formData, setFormData] = useState({
        phone: "",
        password: ""
    });

    // SIGNUP STATE
    const [signupData, setSignupData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [role, setRole] = useState("buyer");
    const [sellerType, setSellerType] = useState("OWNER");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showProfileModal, setShowProfileModal] = useState(false);

    if (!isOpen) return null;

    // ---------------- LOGIN ----------------
    const handleLoginChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone" && !/^\d*$/.test(value)) return;

        setFormData(prev => ({ ...prev, [name]: value }));
        if (error) setError("");
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const { phone, password } = formData;

        if (!phone || !password) {
            return setError("Enter mobile number and password.");
        }

        if (phone.length < 10) {
            return setError("Enter valid mobile number.");
        }

        try {
            setLoading(true);

            const res = await loginApi({ phone, password });

            login(res.user, res.token);

            if (res.user.role === "AGENT") {
                await checkAgentProfile();
            } else {
                onClose();
            }

        } catch (err) {
            setError(err.message || "Invalid credentials.");
        } finally {
            setLoading(false);
        }
    };

    // ---------------- SIGNUP ----------------
    const handleSignupChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone" && !/^\d*$/.test(value)) return;

        setSignupData(prev => ({ ...prev, [name]: value }));
        if (error) setError("");
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        const { name, phone, email, password, confirmPassword } = signupData;

        if (!name || !phone || !password) {
            return setError("Name, phone & password required.");
        }

        if (phone.length < 10) {
            return setError("Enter valid mobile number.");
        }

        if (password !== confirmPassword) {
            return setError("Passwords do not match.");
        }

        try {
            setLoading(true);

            const res = await signupApi({
                name,
                phone,
                email,
                password,
                role: role === "seller" ? sellerType : "BUYER"
            });

            login(res.user, res.token);
            onClose();

        } catch (err) {
            setError(err.message || "Signup failed.");
        } finally {
            setLoading(false);
        }
    };

    // ---------------- AGENT FLOW ----------------
    const checkAgentProfile = async () => {
        try {
            const res = await getMyAgentProfileApi();

            if (!res?.data) {
                setShowProfileModal(true);
            } else {
                onClose();
            }
        } catch {
            onClose();
        }
    };

    const handleSaveProfile = async (form) => {
        try {
            await saveAgentProfileApi(form);
            setShowProfileModal(false);
            onClose();
        } catch {
            alert("Failed to save profile");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* BACKDROP */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* MODAL */}
            <div className="relative bg-white w-full max-w-md rounded-xl shadow-xl p-6 z-10">

                {/* CLOSE */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500"
                >
                    ✕
                </button>

                <h2 className="text-xl font-semibold mb-2">
                    {mode === "login" ? "Login" : "Create Account"}
                </h2>

                {/* ERROR */}
                {error && (
                    <div className="mb-3 text-sm text-red-600">
                        {error}
                    </div>
                )}

                {/* ---------------- LOGIN ---------------- */}
                {mode === "login" ? (
                    <form onSubmit={handleLogin} className="space-y-4">

                        <div className="flex border rounded-md overflow-hidden">
                            <span className="px-3 flex items-center bg-gray-100 text-sm">
                                +91
                            </span>

                            <input
                                name="phone"
                                type="tel"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleLoginChange}
                                className="w-full p-3 outline-none"
                            />
                        </div>

                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleLoginChange}
                            className="w-full p-3 border rounded-md"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-md font-semibold"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin" size={18} />
                                    Logging in...
                                </>
                            ) : (
                                <>
                                    <LogIn size={18} />
                                    Login
                                </>
                            )}
                        </button>

                        <p className="text-sm text-center">
                            Don’t have an account?{" "}
                            <button
                                type="button"
                                onClick={() => setMode("signup")}
                                className="text-green-700 font-semibold"
                            >
                                Create Account
                            </button>
                        </p>

                    </form>
                ) : (

                    // ---------------- SIGNUP ----------------
                    <form onSubmit={handleSignup} className="space-y-3">

                        <input
                            name="name"
                            placeholder="Full Name"
                            value={signupData.name}
                            onChange={handleSignupChange}
                            className="w-full p-3 border rounded-md"
                        />

                        <div className="flex border rounded-md overflow-hidden">
                            <span className="px-3 flex items-center bg-gray-100 text-sm">
                                +91
                            </span>

                            <input
                                name="phone"
                                placeholder="Mobile Number"
                                value={signupData.phone}
                                onChange={handleSignupChange}
                                className="w-full p-3 outline-none"
                            />
                        </div>

                        <input
                            name="email"
                            placeholder="Email (optional)"
                            value={signupData.email}
                            onChange={handleSignupChange}
                            className="w-full p-3 border rounded-md"
                        />

                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={signupData.password}
                            onChange={handleSignupChange}
                            className="w-full p-3 border rounded-md"
                        />

                        <input
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            value={signupData.confirmPassword}
                            onChange={handleSignupChange}
                            className="w-full p-3 border rounded-md"
                        />

                        {/* ROLE */}
                        <div className="flex border rounded overflow-hidden text-sm">
                            <button
                                type="button"
                                onClick={() => setRole("buyer")}
                                className={`flex-1 py-2 ${role === "buyer" ? "bg-green-600 text-white" : ""}`}
                            >
                                Buyer
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole("seller")}
                                className={`flex-1 py-2 ${role === "seller" ? "bg-green-600 text-white" : ""}`}
                            >
                                Seller
                            </button>
                        </div>

                        {role === "seller" && (
                            <div className="flex gap-4 text-sm">
                                <label>
                                    <input
                                        type="radio"
                                        value="OWNER"
                                        checked={sellerType === "OWNER"}
                                        onChange={(e) => setSellerType(e.target.value)}
                                    /> Owner
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="AGENT"
                                        checked={sellerType === "AGENT"}
                                        onChange={(e) => setSellerType(e.target.value)}
                                    /> Agent
                                </label>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-md font-semibold"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin" size={18} />
                                    Creating...
                                </>
                            ) : (
                                <>
                                    <UserPlus size={18} />
                                    Create Account
                                </>
                            )}
                        </button>

                        <p className="text-sm text-center">
                            Already have an account?{" "}
                            <button
                                type="button"
                                onClick={() => setMode("login")}
                                className="text-green-700 font-semibold"
                            >
                                Login
                            </button>
                        </p>

                    </form>
                )}

            </div>

            {/* AGENT PROFILE MODAL */}
            <AgentProfileModal
                isOpen={showProfileModal}
                onClose={() => setShowProfileModal(false)}
                onSave={handleSaveProfile}
            />

        </div>
    );
}

export default AuthModal;