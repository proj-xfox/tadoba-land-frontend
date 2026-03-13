// src/pages/Signup.jsx
import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {

    const [role, setRole] = useState("buyer");

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

                    {/* BUYER SELLER SWITCH */}

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
                            onClick={() => setRole("seller")}
                            className={`flex-1 py-2 text-sm font-medium ${role === "seller"
                                ? "bg-green-700 text-white"
                                : "bg-white text-gray-600"
                                }`}
                        >
                            Seller
                        </button>

                    </div>


                    <div className="space-y-4">

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border rounded px-3 py-2"
                        />

                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            className="w-full border rounded px-3 py-2"
                        />

                        <input
                            type="email"
                            placeholder="Email (optional)"
                            className="w-full border rounded px-3 py-2"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border rounded px-3 py-2"
                        />

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full border rounded px-3 py-2"
                        />

                        <button className="w-full bg-green-700 text-white py-2 rounded">
                            Create Account
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