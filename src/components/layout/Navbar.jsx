import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ProfileMenu from "../../pages/ProfileMenu";

function Navbar({ onLoginClick, onSignupClick, onListProperty }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

            {/* MOBILE NAV */}
            <div className="flex items-center justify-between px-4 py-3 md:hidden">

                {/* Logo */}
                <Link to="/" className="text-lg font-bold text-green-700">
                    TadobaLand
                </Link>

                {/* Right side */}
                <div className="flex items-center gap-2">

                    <button
                        onClick={onListProperty}
                        className="flex items-center gap-1 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800"
                    >
                        Post
                        <span className="bg-white text-green-500 text-xs px-2 py-0.5 rounded">
                            FREE
                        </span>
                    </button>

                    {!user ? (
                        <button
                            onClick={onLoginClick}
                            className="text-sm border px-3 py-2 rounded"
                        >
                            Login
                        </button>
                    ) : (
                        <ProfileMenu user={user} onLogout={handleLogout} />
                    )}
                </div>
            </div>

            {/* DESKTOP NAV (your original, slightly cleaned) */}
            <div className="hidden md:flex max-w-7xl mx-auto px-4 py-4 justify-between items-center">

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-green-700">
                    TadobaLand
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-6">

                    <Link to="/" className="text-gray-700 hover:text-green-700">
                        Browse Land
                    </Link>

                    <button
                        onClick={onListProperty}
                        className="flex items-center gap-1 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800"
                    >
                        Post Property
                        <span className="bg-white text-green-500 text-xs px-2 py-0.5 rounded">
                            FREE
                        </span>
                    </button>

                    {user?.role === "ADMIN" && (
                        <Link to="/admin" className="text-gray-700 hover:text-green-700">
                            Admin Panel
                        </Link>
                    )}

                    {!user ? (
                        <>
                            <button
                                onClick={onLoginClick}
                                className="border border-green-700 text-green-700 px-4 py-2 rounded hover:bg-green-700 hover:text-white"
                            >
                                Login
                            </button>

                            <button
                                onClick={onSignupClick}
                                className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                            >
                                Get Started
                            </button>
                        </>
                    ) : (
                        <ProfileMenu user={user} onLogout={handleLogout} />
                    )}
                </div>

            </div>
        </nav>
    );
}

export default Navbar;