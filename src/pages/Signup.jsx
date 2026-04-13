// src/pages/Signup.jsx

import { signupApi } from "../api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Loader2, UserPlus } from "lucide-react";

function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
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

    const handleChange = (e) => {
        const { name, value } = e.target;

        // 🔥 Restrict phone to numbers only
        if (name === "phone") {
            if (!/^\d*$/.test(value)) return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));

        if (error) setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, phone, email, password, confirmPassword } = formData;

        // ✅ Validation
        if (!name || !phone || !password) {
            return setError("Name, mobile number and password are required.");
        }

        if (phone.length < 10) {
            return setError("Please enter a valid 10-digit mobile number.");
        }

        if (password.length < 6) {
            return setError("Password must be at least 6 characters.");
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

            // ✅ keep existing behavior
            localStorage.setItem("token", res.token);

            if (role === "seller") {
                navigate("/add-property");
            } else {
                navigate("/");
            }

        } catch (err) {
            setError(err.message || "Signup failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen grid md:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="bg-green-800 text-white flex flex-col justify-center p-12">

                <h1 className="text-3xl font-bold mb-6">
                    List or Find Land Around Tadoba
                </h1>

                <ul className="space-y-3 text-lg">
                    <li>✔ Post land listings easily</li>
                    <li>✔ Connect with serious buyers</li>
                    <li>✔ Explore farm & resort land deals</li>
                </ul>

            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center justify-center bg-gray-50 p-4">

                <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl border">

                    <h2 className="text-2xl font-bold mb-2 text-center">
                        Create Account
                    </h2>

                    <p className="text-center text-sm text-gray-500 mb-6">
                        Get started in seconds
                    </p>

                    {/* ERROR */}
                    {error && (
                        <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded">
                            {error}
                        </div>
                    )}

                    {/* ROLE SWITCH */}
                    <div className="flex border rounded mb-6 overflow-hidden">

                        <button
                            type="button"
                            onClick={() => setRole("buyer")}
                            className={`flex-1 py-2 text-sm font-medium ${role === "buyer"
                                    ? "bg-green-700 text-white"
                                    : "bg-white text-gray-600"
                                }`}
                        >
                            Buyer
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                setRole("seller");
                                setSellerType("OWNER");
                            }}
                            className={`flex-1 py-2 text-sm font-medium ${role === "seller"
                                    ? "bg-green-700 text-white"
                                    : "bg-white text-gray-600"
                                }`}
                        >
                            Seller
                        </button>

                    </div>

                    {/* OWNER / AGENT */}
                    {role === "seller" && (
                        <div className="mb-6">

                            <p className="text-sm font-medium mb-2">
                                You are:
                            </p>

                            <div className="flex gap-4">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="OWNER"
                                        checked={sellerType === "OWNER"}
                                        onChange={(e) => setSellerType(e.target.value)}
                                    />
                                    Owner
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="AGENT"
                                        checked={sellerType === "AGENT"}
                                        onChange={(e) => setSellerType(e.target.value)}
                                    />
                                    Agent
                                </label>
                            </div>

                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-xl"
                        />

                        {/* PHONE */}
                        <div className="flex border rounded-xl overflow-hidden">
                            <span className="px-3 flex items-center bg-gray-100 text-sm">
                                +91
                            </span>

                            <input
                                name="phone"
                                type="tel"
                                placeholder="Mobile Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-3 outline-none"
                            />
                        </div>

                        <input
                            name="email"
                            type="email"
                            placeholder="Email (optional)"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-xl"
                        />

                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-xl"
                        />

                        <input
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-xl"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 disabled:opacity-50"
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

                    </form>

                    <p className="text-sm text-center mt-6">
                        Already have an account?{" "}
                        <Link to="/login" className="text-green-700 font-semibold">
                            Login
                        </Link>
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Signup;