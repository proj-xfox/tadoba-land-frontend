// src/pages/Login.jsx
import { loginApi } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { getMyAgentProfileApi, saveAgentProfileApi } from "../api/agentApi";
import AgentProfileModal from "../components/agent/AgentProfileModal";

function Login() {

    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            if (!phone || !password) {
                alert("Please enter mobile number and password");
                return;
            }

            setLoading(true);

            const res = await loginApi({
                phone,
                password
            });

            // Save token
            localStorage.setItem("token", res.token);
            localStorage.setItem("role", res.user.role);

            if (res.user.role === "AGENT") {
                await checkAgentProfileAndShowModal();
            } else {
                navigate("/");
            }

        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSaveProfile = async (form) => {
        try {
            await saveAgentProfileApi(form);
            setShowProfileModal(false);
            alert("Profile completed! You'll get more enquiries 🚀");
            navigate("/");
        } catch (err) {
            console.error(err);
            alert("Failed to save profile");
        }
    };

    const leftSlides = [
        "Discover Land Opportunities Around Tadoba",
        "Direct Owner Listings — No Middlemen",
        "Find Resort & Farm Land Deals"
    ];

    const rightSlides = [
        "Sell Your Land Easily",
        "Reach Genuine Buyers",
        "List Your Property in Minutes"
    ];

    const [leftIndex, setLeftIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setLeftIndex((prev) => (prev + 1) % leftSlides.length);
            setRightIndex((prev) => (prev + 1) % rightSlides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const checkAgentProfileAndShowModal = async () => {
        try {
            const res = await getMyAgentProfileApi();

            if (!res?.data) {
                setShowProfileModal(true);
            } else {
                navigate("/"); // Profile exists, go to homepage
            }
        } catch (err) {
            console.error("Profile check failed", err);
            navigate("/");
        }
    };

    const properties = [1, 2, 3, 4];

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 relative">

            {/* LEFT AREA */}
            <div className="hidden md:flex bg-gray-100 items-center justify-center  overflow-hidden">

                {!open ? (

                    <div
                        onClick={() => setOpen(true)}
                        className="relative bg-green-800 text-white w-full h-full flex items-center justify-center text-center cursor-pointer overflow-hidden"
                    >

                        {/* TEXT */}
                        <div className="px-10">
                            <h2 className="text-2xl font-semibold leading-relaxed">
                                {leftSlides[leftIndex]}
                            </h2>
                        </div>

                        {/* EDGE INDICATOR */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-700 p-3 rounded-l-lg animate-arrow-right">
                            <ChevronRight size={24} />
                        </div>

                    </div>

                ) : (

                    <div className="grid grid-cols-1 gap-4 w-full">

                        {properties.map((p) => (
                            <div
                                key={p}
                                className="bg-white rounded shadow p-3 hover:shadow-md transition"
                            >
                                <div className="h-24 bg-gray-300 mb-2 rounded"></div>
                                <p className="text-sm font-semibold">
                                    Farm Land Near Moharli
                                </p>
                            </div>
                        ))}

                    </div>

                )}

            </div>


            {/* LOGIN */}
            <div className="flex items-center justify-center bg-gray-50 px-4">

                <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md">

                    <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
                        Login to TadobaLand
                    </h2>

                    <div className="space-y-4">

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

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />

                        <button
                            onClick={handleLogin}
                            disabled={loading}
                            className="w-full bg-green-700 text-white py-2 rounded disabled:opacity-50"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>

                    </div>

                    <p className="text-sm text-center mt-6">
                        New here?{" "}
                        <Link
                            to="/signup"
                            className="text-green-700 font-medium"
                        >
                            Create an account
                        </Link>
                    </p>

                </div>

            </div>


            {/* RIGHT AREA */}
            <div className="hidden md:flex bg-gray-100 items-center justify-center  overflow-hidden">

                {!open ? (

                    <div
                        onClick={() => setOpen(true)}
                        className="relative bg-gray-900 text-white w-full h-full flex items-center justify-center text-center cursor-pointer overflow-hidden"
                    >

                        {/* TEXT */}
                        <div className="px-10">
                            <h2 className="text-2xl font-semibold leading-relaxed">
                                {rightSlides[rightIndex]}
                            </h2>
                        </div>

                        {/* EDGE INDICATOR */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 p-3 rounded-r-lg animate-arrow-left">
                            <ChevronLeft size={24} />
                        </div>

                    </div>

                ) : (

                    <div className="grid grid-cols-1 gap-4 w-full">

                        {properties.map((p) => (
                            <div
                                key={p}
                                className="bg-white rounded shadow p-3 hover:shadow-md transition"
                            >
                                <div className="h-24 bg-gray-300 mb-2 rounded"></div>
                                <p className="text-sm font-semibold">
                                    Resort Plot Near Tadoba
                                </p>
                            </div>
                        ))}

                    </div>

                )}

            </div>

            {/* ✅ BEST PLACE */}
            <AgentProfileModal
                isOpen={showProfileModal}
                onClose={() => setShowProfileModal(false)}
                onSave={handleSaveProfile}
            />
        </div>
    );
}

export default Login;