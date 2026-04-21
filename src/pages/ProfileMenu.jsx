import { useState } from "react";
import { useNavigate } from "react-router-dom";

function getInitials(name = "") {
    return name
        .split(" ")
        .map(w => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
}

export default function ProfileMenu({ user, onLogout }) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="relative">
            {/* Avatar Trigger */}
            <button
                onClick={() => setOpen(!open)}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden"
            >
                {user.avatar ? (
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span className="text-sm font-semibold text-gray-600">
                        {getInitials(user.name)}
                    </span>
                )}
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border z-50">

                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                        {user.name}
                    </div>

                    <button
                        onClick={() => navigate("/profile")}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                        My Profile
                    </button>

                    {user.role === "AGENT" && (
                        <button
                            onClick={() => navigate("/dashboard")}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                            Dashboard
                        </button>
                    )}

                    <button
                        onClick={onLogout}
                        className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}