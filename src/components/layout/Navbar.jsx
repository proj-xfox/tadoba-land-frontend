// src/components/layout/Navbar.jsx

import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../search/SearchBar";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import BecomeSellerModal from "../auth/BecomeSellerModal";

function Navbar({ onSearch, onLoginClick, onSignupClick }) {

    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [showSellerModal, setShowSellerModal] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const handleSellerConfirm = (type) => {
        setShowSellerModal(false);

        // 👉 for now just continue
        // later: call API to upgrade role

        navigate("/add-property");
    };

    const handleListProperty = () => {

        if (!user) {
            onSignupClick();
            return;
        }

        if (user.role === "BUYER") {
            setShowSellerModal(true);
            return;
        }

        navigate("/add-property");
    };
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span>🐅</span>
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

                    <button
                        onClick={handleListProperty}
                        className="text-gray-700 hover:text-green-700"
                    >
                        List Your Land
                    </button>

                    {/* ROLE BASED */}
                    {user?.role === "AGENT" && (
                        <Link to="/dashboard" className="text-gray-700 hover:text-green-700">
                            Dashboard
                        </Link>
                    )}

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
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-700">
                                Hi, {user.name}
                            </span>

                            <button
                                onClick={handleLogout}
                                className="border border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-500 hover:text-white"
                            >
                                Logout
                            </button>
                        </div>
                    )}

                </div>
            </div>

            <BecomeSellerModal
                isOpen={showSellerModal}
                onClose={() => setShowSellerModal(false)}
                onConfirm={handleSellerConfirm}
            />
        </nav>
    );
}

export default Navbar;