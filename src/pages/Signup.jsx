//src/pages/Signup.jsx
import { signupApi } from "../api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const [role, setRole] = useState("buyer");
    const [sellerType, setSellerType] = useState("OWNER"); // 🔥 new

    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            if (!name || !phone || !password) {
                alert("Name, mobile, and password are required");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            setLoading(true);

            const res = await signupApi({
                name,
                phone,
                email,
                password,
                role: role === "seller" ? sellerType : "BUYER" // ✅ FIXED
            });

            // Save token
            localStorage.setItem("token", res.token);

            // Redirect
            if (role === "seller") {
                navigate("/add-property");
            } else {
                navigate("/");
            }

        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen grid md:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="bg-green-800 text-white flex flex-col justify-center p-12">

                <h1 className="text-3xl font-bold mb-6">
                    List or Find Land
                    Around Tadoba
                </h1>

                <ul className="space-y-3 text-lg">
                    <li>✔ Post land listings easily</li>
                    <li>✔ Connect with serious buyers</li>
                    <li>✔ Explore farm & resort land deals</li>
                </ul>

            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center justify-center bg-gray-50">

                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

                    <h2 className="text-2xl font-semibold mb-6">
                        Create your account
                    </h2>

                    {/* BUYER / SELLER SWITCH */}
                    <div className="flex border rounded mb-6 overflow-hidden">

                        <button
                            onClick={() => setRole("buyer")}
                            className={`flex-1 py-2 text-sm font-medium ${role === "buyer"
                                ? "bg-green-700 text-white"
                                : "bg-white text-gray-600"
                                }`}
                        >
                            Buyer
                        </button>

                        <button
                            onClick={() => {
                                setRole("seller");
                                setSellerType("OWNER"); // default
                            }}
                            className={`flex-1 py-2 text-sm font-medium ${role === "seller"
                                ? "bg-green-700 text-white"
                                : "bg-white text-gray-600"
                                }`}
                        >
                            Seller
                        </button>

                    </div>

                    {/* 🔥 OWNER / AGENT SELECTOR */}
                    {role === "seller" && (
                        <div className="mb-6">

                            <p className="text-sm font-medium mb-2">
                                You are:
                            </p>

                            <div className="flex gap-4">

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="sellerType"
                                        value="OWNER"
                                        checked={sellerType === "OWNER"}
                                        onChange={(e) => setSellerType(e.target.value)}
                                    />
                                    Owner
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="sellerType"
                                        value="AGENT"
                                        checked={sellerType === "AGENT"}
                                        onChange={(e) => setSellerType(e.target.value)}
                                    />
                                    Agent
                                </label>

                            </div>

                        </div>
                    )}

                    <div className="space-y-4">

                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />

                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />

                        <input
                            type="email"
                            placeholder="Email (optional)"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />

                        <button
                            onClick={handleSignup}
                            disabled={loading}
                            className="w-full bg-green-700 text-white py-2 rounded disabled:opacity-50"
                        >
                            {loading ? "Creating..." : "Create Account"}
                        </button>

                    </div>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        or
                    </div>

                    <button className="w-full border py-2 rounded mt-4">
                        Continue with Google
                    </button>

                    <p className="text-sm text-center mt-6">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-green-700 font-medium"
                        >
                            Login
                        </Link>
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Signup;