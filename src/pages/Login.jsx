// src/pages/Login.jsx

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Loader2, LogIn } from "lucide-react";
import { loginApi } from "../api/authApi";
import { useAuth } from "../context/AuthContext";
import { getMyAgentProfileApi, saveAgentProfileApi } from "../api/agentApi";
import AgentProfileModal from "../components/agent/AgentProfileModal";
import toast from "react-hot-toast";

function Login() {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        phone: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showProfileModal, setShowProfileModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // 🔥 Only allow numbers in phone
        if (name === "phone") {
            if (!/^\d*$/.test(value)) return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));

        if (error) setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { phone, password } = formData;

        if (!phone || !password) {
            return setError("Please enter mobile number and password.");
        }

        if (phone.length < 10) {
            return setError("Please enter a valid 10-digit mobile number.");
        }

        try {
            setLoading(true);

            const res = await loginApi({
                phone,
                password
            });

            login(res.user, res.token);

            if (res.user.role === "AGENT") {
                await checkAgentProfileAndShowModal();
            } else {
                navigate("/", { replace: true });
            }

        } catch (err) {
            setError(err.message || "Invalid mobile number or password.");
        } finally {
            setLoading(false);
        }
    };

    const checkAgentProfileAndShowModal = async () => {
        try {
            const res = await getMyAgentProfileApi();

            if (!res?.data) {
                setShowProfileModal(true);
            } else {
                navigate("/");
            }
        } catch {
            navigate("/");
        }
    };

    const handleSaveProfile = async (form) => {
        try {
            await saveAgentProfileApi(form);
            setShowProfileModal(false);
            navigate("/");
        } catch {
            toast.error("Failed to save profile");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 p-4">
            <div className="bg-white w-full max-w-sm p-8 rounded-2xl shadow-xl border">

                <h2 className="text-2xl font-bold text-center mb-2">
                    Welcome Back
                </h2>

                <p className="text-center text-sm text-gray-500 mb-6">
                    Login using your mobile number
                </p>

                {/* ERROR */}
                {error && (
                    <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* PHONE INPUT */}
                    <div className="flex border rounded-xl overflow-hidden">
                        <span className="px-3 flex items-center bg-gray-100 text-sm">
                            +91
                        </span>

                        <input
                            name="phone"
                            type="tel"
                            placeholder="Enter mobile number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 outline-none"
                        />
                    </div>

                    {/* PASSWORD */}
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 disabled:opacity-50"
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

                </form>

                <p className="text-sm text-center mt-6">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-green-700 font-semibold">
                        Create Account
                    </Link>
                </p>

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

export default Login;