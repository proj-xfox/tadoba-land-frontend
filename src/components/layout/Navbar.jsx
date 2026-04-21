// src/components/layout/Navbar.jsx

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
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link to="/" className="text-2xl font-bold text-green-700">
                        TadobaLand
                    </Link>
                </div>

                {/* Search will consider this later*/}
                {/* <div className="flex-1 max-w-xl">
                    <SearchBar onSearch={onSearch} initialValue={searchQuery} />
                </div> */}

                {/* Navigation */}
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-gray-700 hover:text-green-700">
                        Browse Land
                    </Link>

                    <button
                        onClick={onListProperty}
                        className="flex items-center gap-1 bg-green-700 text-white px-4 py-1 rounded-md hover:bg-green-800 transition"
                    >
                        Post Property
                        <span className="bg-white text-green-500 text-xs font-semibold px-2 py-0.5 rounded">
                            FREE
                        </span>
                    </button>

                    {/* ROLE BASED */}
                    {/* {user?.role === "AGENT" && (
                        <Link to="/dashboard" className="text-gray-700 hover:text-green-700">
                            Dashboard
                        </Link>
                    )} */}

                    {user?.role === "ADMIN" && (
                        <Link to="/admin" className="text-gray-700 hover:text-green-700">
                            Admin Panel
                        </Link>
                    )}

                    {/* AUTH UI */}
                    {!user ? (
                        <>
                            <button
                                onClick={onLoginClick}
                                className="border border-green-700 text-green-700 px-4 py-1 rounded hover:bg-green-700 hover:text-white"
                            >
                                Login
                            </button>

                            <button
                                onClick={onSignupClick}
                                className="bg-green-700 text-white px-4 py-1 rounded hover:bg-green-800"
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