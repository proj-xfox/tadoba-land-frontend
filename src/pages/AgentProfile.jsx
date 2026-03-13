// src/pages/AgentProfile.jsx
import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyGrid from "../components/property/PropertyGrid";

function AgentProfile() {

    const { slug } = useParams();

    const agent = {
        name: "Rajesh Wankhede",
        slug: "rajesh-wankhede",
        location: "Moharli",
        bio: "Helping investors find resort land near Tadoba Tiger Reserve since 2018.",
        avatar: "https://i.pravatar.cc/150?img=12",
        listings: 12,
        dealsClosed: 8,
        experience: "5 Years",
        rating: 4.7,
        areas: ["Moharli", "Kolara", "Chimur"]
    };

    const properties = [
        {
            id: 1,
            title: "3 Acre Land Near Moharli Gate",
            village: "Moharli",
            price: "₹18 Lakh", area: "5 Acres",
            type: "Lease",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef"
        },
        {
            id: 2,
            title: "5 Acre Farm Land – Kolara",
            village: "Kolara",
            price: "₹25 Lakh", area: "5 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
        },
        {
            id: 3,
            title: "2 Acre Resort Plot – Chimur",
            village: "Chimur",
            price: "₹14 Lakh", area: "5 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        },
        {
            id: 4,
            title: "5 Acre Farm Land – Kolara",
            village: "Kolara",
            price: "₹25 Lakh",
            area: "5 Acres",
            type: "Lease",
            image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
        },
        {
            id: 5,
            title: "2 Acre Resort Plot – Chimur",
            village: "Chimur",
            price: "₹14 Lakh",
            area: "5 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        },
        {
            id: 6,
            title: "5 Acre Farm Land – Kolara",
            village: "Kolara", area: "5 Acres",
            type: "Sale",
            price: "₹25 Lakh",
            image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
        },
        {
            id: 7,
            title: "2 Acre Resort Plot – Chimur",
            village: "Chimur", area: "5 Acres",
            type: "Lease",
            price: "₹14 Lakh",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        }
    ];

    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 py-10 pt-24">

                {/* Agent Header */}
                <div className="relative rounded-xl shadow overflow-hidden min-h-[240px]">

                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.05)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&auto=format&fit=crop')"
                        }}
                    />

                    {/* Content */}
                    <div className="relative p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">

                        {/* Avatar */}
                        <img
                            src={agent.avatar}
                            alt={agent.name}
                            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow"
                        />

                        <div className="flex-1 text-center md:text-left">

                            {/* Name */}
                            <h1 className="text-3xl font-bold text-white">
                                {agent.name}

                                <span className="ml-3 text-xs bg-yellow-400 text-black px-2 py-1 rounded">
                                    ✔ Verified Partner
                                </span>

                            </h1>

                            <p className="text-white/90 font-medium mt-1">
                                Land Consultant – {agent.location}
                            </p>

                            <p className="text-white/80 mt-3 max-w-xl">
                                {agent.bio}
                            </p>

                            {/* Areas */}
                            <div className="mt-3 flex gap-2 flex-wrap justify-center md:justify-start">
                                {agent.areas.map((area) => (
                                    <span
                                        key={area}
                                        className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>

                            {/* Contact Buttons */}
                            <div className="mt-5 flex gap-3 justify-center md:justify-start">

                                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
                                    Contact Agent
                                </button>

                                <button className="border border-green-600 text-green-700 px-4 py-2 rounded-lg text-sm bg-white hover:bg-green-50">
                                    WhatsApp
                                </button>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                    <div className="bg-green-50 border border-green-100 rounded-lg shadow-sm p-5 text-center">
                        <p className="text-3xl font-bold text-green-700">{agent.listings}</p>
                        <p className="text-sm text-gray-600 mt-1">Active Listings</p>
                    </div>

                    <div className="bg-blue-50 border border-blue-100 rounded-lg shadow-sm p-5 text-center">
                        <p className="text-3xl font-bold text-blue-700">{agent.dealsClosed}</p>
                        <p className="text-sm text-gray-600 mt-1">Deals Closed</p>
                    </div>

                    <div className="bg-purple-50 border border-purple-100 rounded-lg shadow-sm p-5 text-center">
                        <p className="text-3xl font-bold text-purple-700">{agent.experience}</p>
                        <p className="text-sm text-gray-600 mt-1">Experience</p>
                    </div>

                    <div className="bg-amber-50 border border-amber-100 rounded-lg shadow-sm p-5 text-center">
                        <p className="text-3xl font-bold text-amber-700">{agent.rating}</p>
                        <p className="text-sm text-gray-600 mt-1">Rating</p>
                    </div>

                </div>


                {/* Listings */}
                <div className="mt-12">

                    <h2 className="text-xl font-semibold mb-4">
                        Land Listed by {agent.name}
                    </h2>

                    <PropertyGrid properties={properties} />

                </div>

            </div>

            <Footer />
        </>
    );
}

export default AgentProfile;