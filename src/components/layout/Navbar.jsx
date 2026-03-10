// src/components/layout/Navbar.jsx
import { Link } from "react-router-dom";
import SearchBar from "../search/SearchBar";

function Navbar({ onSearch }) {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-green-700">
                    TadobaLand
                </Link>

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
                </div>
            </div>
        </nav>
    );
}

export default Navbar;