import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="min-h-screen relative grid grid-cols-1 md:grid-cols-2">

            {/* BRAND LINK */}
            <div className="absolute top-0 left-0 w-full p-4">
                <Link
                    to="/"
                    className="text-xl font-bold text-green-800"
                >
                    TadobaLand
                </Link>
            </div>

            {/* LEFT SIDE (hidden on mobile) */}
            <div className="hidden md:flex bg-green-800 text-white flex-col justify-center p-12">

                <h1 className="text-3xl font-bold mb-6">
                    Discover Land Opportunities
                    Around Tadoba
                </h1>

                <ul className="space-y-3 text-lg">
                    <li>✔ Direct owner listings</li>
                    <li>✔ Resort & farm land deals</li>
                    <li>✔ Connect with genuine buyers</li>
                </ul>

            </div>


            {/* RIGHT SIDE */}
            <div className="flex items-center justify-center bg-gray-50 px-4">

                <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md">

                    <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center md:text-left">
                        Login to TadobaLand
                    </h2>

                    <div className="space-y-4">

                        {/* MOBILE NUMBER */}
                        <div className="flex border rounded overflow-hidden">
                            <span className="px-3 flex items-center bg-gray-100 text-sm">
                                +91
                            </span>

                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                className="w-full px-3 py-2 outline-none"
                            />
                        </div>

                        {/* PASSWORD */}
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border rounded px-3 py-2"
                        />

                        {/* FORGOT PASSWORD */}
                        <div className="text-right text-sm">
                            <Link
                                to="/forgot-password"
                                className="text-green-700 hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* LOGIN BUTTON */}
                        <button className="w-full bg-green-700 text-white py-2 rounded">
                            Login
                        </button>

                    </div>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        or
                    </div>

                    <button className="w-full border py-2 rounded mt-4">
                        Continue with Google
                    </button>

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

        </div>
    );
}

export default Login;