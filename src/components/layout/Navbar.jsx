// src/components/layout/Navbar.jsx

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../search/SearchBar";

function Navbar({ onSearch }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        navigate("/");
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                <div className="flex items-center gap-2">
                    <span className="tiger">🐅</span>

                    <Link to="/" className="text-2xl font-bold text-green-700">
                        TadobaLand
                    </Link>
                </div>

                {/* Search */}
                <div className="flex-1 max-w-xl">
                    <SearchBar onSearch={onSearch} />
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-6">
                    <Link to="/" className="text-gray-700 hover:text-green-700">
                        Browse Land
                    </Link>

                    <Link to="/add-property" className="text-gray-700 hover:text-green-700">
                        List Your Land
                    </Link>

                    {!isLoggedIn ? (
                        <>
                            <Link
                                to="/login"
                                className="border border-green-700 text-green-700 px-4 py-1 rounded hover:bg-green-700 hover:text-white"
                            >
                                Login
                            </Link>

                            <Link
                                to="/signup"
                                className="bg-green-700 text-white px-4 py-1 rounded hover:bg-green-800"
                            >
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="border border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-500 hover:text-white"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;