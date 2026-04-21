// src/pages/Profile.jsx
import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { updateUserApi } from "../api/authApi";
import { getMyAgentProfileApi, saveAgentProfileApi } from "../api/agentApi";
import { getMeApi } from "../api/authApi";
import toast from "react-hot-toast";



const GATES = [
    "MOHARLI",
    "KOLARA",
    "NAVEGAON",
    "ZARI",
    "JUNONA",
    "DEVADA",
    "AGARZARI",
    "PANGDI",
    "KESLAGHAT",
    "ALIZANZA",
    "MADNAPUR"
];

// 🔁 Backend → UI mapper
const mapExperienceToLabel = (years) => {
    if (!years) return "";
    if (years <= 1) return "0-1";
    if (years <= 3) return "1-3";
    if (years <= 5) return "3-5";
    return "5+";
};

export default function Profile({ onListProperty }) {

    const [buyer, setBuyer] = useState({
        areas: ["MOHARLI", "ZARI"],
        budget: "5-10L",
        propertyTypes: ["FARM"]
    });

    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const [profile, setProfile] = useState({
        bio: "",
        experience: "",
        areas: []
    });

    // 🚀 Load both APIs
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            // 👉 parallel calls (fast)
            const [userRes, profileRes] = await Promise.all([
                getMeApi(),
                getMyAgentProfileApi()
            ]);

            // ---------------- USER ----------------
            const userData = userRes?.data;
            if (userData) {
                setUser({
                    name: userData.name || "",
                    phone: userData.phone || "",
                    email: userData.email || "",
                    role: userData.role || "BUYER"
                });
            }

            // ---------------- AGENT PROFILE ----------------
            const profileData = profileRes?.data;
            if (profileData) {
                setProfile({
                    bio: profileData.bio || "",
                    experience: mapExperienceToLabel(profileData.experienceYears),
                    areas: profileData.gates || []
                });
            }

        } catch (err) {
            console.error("Failed to load profile data", err);
        }
    };

    const toggleGate = (gate) => {
        setProfile(prev => ({
            ...prev,
            areas: prev.areas.includes(gate)
                ? prev.areas.filter(g => g !== gate)
                : [...prev.areas, gate]
        }));
    };


    const handleSaveUser = async () => {
        if (!user.name || !user.phone) {
            toast.error("Name and phone are required");
            return;
        }

        try {
            await updateUserApi({
                name: user.name,
                phone: user.phone,
                email: user.email
            });

            toast.success("Details updated successfully");

        } catch (err) {
            console.error("Update user failed:", err);

            // Optional better error handling
            const message = err.message || "Failed to update details";
            toast.error(message);
        }
    };

    const handleSaveProfile = async () => {
        if (!profile.areas.length) {
            toast.error("Select at least one area");
            return;
        }

        if (!profile.experience) {
            toast.error("Select experience");
            return;
        }

        try {
            await saveAgentProfileApi({
                bio: profile.bio,
                experience: profile.experience,
                areas: profile.areas
            });

            toast.success("Profile saved successfully");

        } catch (err) {
            console.error(err);
            toast.error("Failed to save profile");
        }
    };

    return (
        <>
            <Navbar
                onListProperty={onListProperty}
            />

            <div className="min-h-screen bg-gray-50 pt-24 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">

                    {/* ================= USER DETAILS ================= */}
                    <div className="md:col-span-2 bg-white p-6 rounded-xl shadow h-fit md:sticky md:top-24">

                        <h2 className="text-xl font-semibold mb-4">
                            Your Details
                        </h2>

                        <div className="space-y-4">

                            <div>
                                <label className="text-sm text-gray-600">Full Name</label>
                                <input
                                    type="text"
                                    value={user.name}
                                    onChange={(e) =>
                                        setUser({ ...user, name: e.target.value })
                                    }
                                    className="w-full border rounded px-3 py-2 mt-1"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Phone</label>
                                <input
                                    type="text"
                                    value={user.phone}
                                    onChange={(e) =>
                                        setUser({ ...user, phone: e.target.value })
                                    }
                                    className="w-full border rounded px-3 py-2 mt-1"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Email</label>
                                <input
                                    type="text"
                                    value={user.email}
                                    onChange={(e) =>
                                        setUser({ ...user, email: e.target.value })
                                    }
                                    className="w-full border rounded px-3 py-2 mt-1"
                                />
                            </div>

                            <button
                                onClick={handleSaveUser}
                                className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-black"
                            >
                                Save Details
                            </button>
                        </div>
                    </div>

                    {/* ================= USER PROFILE ================= */}
                    {/* ================= RIGHT SIDE ================= */}
                    <div className="md:col-span-3 bg-white p-6 rounded-xl shadow h-fit">

                        {/* ---------------- AGENT ---------------- */}
                        {user.role === "AGENT" && (
                            <>
                                <h2 className="text-xl font-semibold mb-2">
                                    Agent Profile
                                </h2>

                                <p className="text-sm text-gray-500 mb-4">
                                    Complete your profile to get more buyer calls 📞
                                </p>

                                {/* Areas */}
                                <div className="mt-4">
                                    <label className="text-sm font-medium">
                                        Where do you work?
                                    </label>

                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {GATES.map(gate => {
                                            const active = profile.areas.includes(gate);

                                            return (
                                                <button
                                                    key={gate}
                                                    onClick={() => toggleGate(gate)}
                                                    className={`px-3 py-1 rounded-full text-sm border
                                ${active
                                                            ? "bg-green-700 text-white"
                                                            : "bg-gray-100 text-gray-700"
                                                        }`}
                                                >
                                                    {gate}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Experience */}
                                <div className="mt-5">
                                    <label className="text-sm font-medium">
                                        Years of Experience
                                    </label>

                                    <div className="flex gap-2 mt-2 flex-wrap">
                                        {["0-1", "1-3", "3-5", "5+"].map(exp => (
                                            <button
                                                key={exp}
                                                onClick={() =>
                                                    setProfile({ ...profile, experience: exp })
                                                }
                                                className={`px-3 py-1 rounded-full text-sm border
                            ${profile.experience === exp
                                                        ? "bg-green-700 text-white"
                                                        : "bg-gray-100 text-gray-700"
                                                    }`}
                                            >
                                                {exp} yrs
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Bio */}
                                <div className="mt-5">
                                    <label className="text-sm font-medium">
                                        About You
                                    </label>

                                    <textarea
                                        rows="3"
                                        value={profile.bio}
                                        onChange={(e) =>
                                            setProfile({ ...profile, bio: e.target.value })
                                        }
                                        className="w-full mt-2 border rounded-lg p-2 text-sm"
                                    />
                                </div>

                                <button
                                    onClick={handleSaveProfile}
                                    className="mt-6 bg-green-700 text-white px-6 py-2 rounded"
                                >
                                    Save Profile
                                </button>
                            </>
                        )}

                        {/* ---------------- BUYER ---------------- */}
                        {user.role === "BUYER" && (
                            <>
                                <h2 className="text-xl font-semibold mb-2">
                                    Your Preferences
                                </h2>

                                <p className="text-sm text-gray-500 mb-4">
                                    Tell us what you’re looking for
                                </p>

                                {/* Areas */}
                                <div className="mt-4">
                                    <label className="text-sm font-medium">
                                        Interested Locations Arround Tadoba
                                    </label>

                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {GATES.map(gate => {
                                            const active = buyer.areas.includes(gate);

                                            return (
                                                <button
                                                    key={gate}
                                                    onClick={() =>
                                                        setBuyer(prev => ({
                                                            ...prev,
                                                            areas: active
                                                                ? prev.areas.filter(a => a !== gate)
                                                                : [...prev.areas, gate]
                                                        }))
                                                    }
                                                    className={`px-3 py-1 rounded-full text-sm border
                                ${active
                                                            ? "bg-green-600 text-white"
                                                            : "bg-gray-100 text-gray-700"
                                                        }`}
                                                >
                                                    {gate}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Budget */}
                                <div className="mt-5">
                                    <label className="text-sm font-medium">
                                        Budget Range
                                    </label>

                                    <div className="flex gap-2 mt-2 flex-wrap">
                                        {["<5L", "5-10L", "10-25L", "25-50L", "50-100L", "100L+"].map(b => (
                                            <button
                                                key={b}
                                                onClick={() =>
                                                    setBuyer({ ...buyer, budget: b })
                                                }
                                                className={`px-3 py-1 rounded-full text-sm border
                            ${buyer.budget === b
                                                        ? "bg-green-600 text-white"
                                                        : "bg-gray-100 text-gray-700"
                                                    }`}
                                            >
                                                {b}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Property Type */}
                                <div className="mt-5">
                                    <label className="text-sm font-medium">
                                        Property Type
                                    </label>

                                    <div className="flex gap-2 mt-2 flex-wrap">
                                        {["FARM", "PLOT", "AGRICULTURE"].map(type => {
                                            const active = buyer.propertyTypes.includes(type);

                                            return (
                                                <button
                                                    key={type}
                                                    onClick={() =>
                                                        setBuyer(prev => ({
                                                            ...prev,
                                                            propertyTypes: active
                                                                ? prev.propertyTypes.filter(t => t !== type)
                                                                : [...prev.propertyTypes, type]
                                                        }))
                                                    }
                                                    className={`px-3 py-1 rounded-full text-sm border
                                ${active
                                                            ? "bg-green-600 text-white"
                                                            : "bg-gray-100 text-gray-700"
                                                        }`}
                                                >
                                                    {type}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <button
                                    onClick={() => console.log("Saving buyer prefs", buyer)}
                                    className="mt-6 bg-green-600 text-white px-6 py-2 rounded"
                                >
                                    Save Preferences
                                </button>
                            </>
                        )}

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}