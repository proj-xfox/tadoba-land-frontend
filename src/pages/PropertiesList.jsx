// src/pages/PropertiesList.jsx
import { useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyCardList from "../components/property/PropertyCardList";
import SafariGates from "../components/home/SafariGates";

function PropertiesList() {

    const { type } = useParams();

    const properties = [
        {
            id: 1,
            title: "5 Acre Resort Land",
            village: "Moharli",
            price: "₹25,00,000",
            area: "5 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
            listedBy: "owner"
        },
        {
            id: 2,
            title: "3 Acre Farm Land",
            village: "Kolara",
            price: "₹15,00,000",
            area: "3 Acres",
            type: "Lease",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            listedBy: "agent"
        },
        {
            id: 3,
            title: "10 Acre Eco Resort Land",
            village: "Chimur",
            price: "₹60,00,000",
            area: "10 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
            listedBy: "owner"
        },
        {
            id: 4,
            title: "5 Acre Resort Land",
            village: "Moharli",
            price: "₹25,00,000",
            area: "5 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
            listedBy: "owner"
        },
        {
            id: 5,
            title: "3 Acre Farm Land",
            village: "Kolara",
            price: "₹15,00,000",
            area: "3 Acres",
            type: "Lease",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            listedBy: "agent"
        },
        {
            id: 6,
            title: "3 Acre Farm Land",
            village: "Kolara",
            price: "₹15,00,000",
            area: "3 Acres",
            type: "Lease",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            listedBy: "agent"
        },
        {
            id: 7,
            title: "3 Acre Farm Land",
            village: "Kolara",
            price: "₹15,00,000",
            area: "3 Acres",
            type: "Lease",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            listedBy: "agent"
        },
        {
            id: 8,
            title: "3 Acre Farm Land",
            village: "Kolara",
            price: "₹15,00,000",
            area: "3 Acres",
            type: "Lease",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            listedBy: "agent"
        },
        {
            id: 9,
            title: "3 Acre Farm Land",
            village: "Kolara",
            price: "₹15,00,000",
            area: "3 Acres",
            type: "Lease",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            listedBy: "agent"
        },
        {
            id: 10,
            title: "10 Acre Eco Resort Land",
            village: "Chimur",
            price: "₹60,00,000",
            area: "10 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
            listedBy: "owner"
        }
    ];

    const filtered = properties.filter(p => p.listedBy === type);

    return (
        <>
            <Navbar />
            <SafariGates />
            <div className="w-full bg-gray-100 mx-auto mt-10 px-20 py-10">

                <h1 className="text-2xl font-semibold mb-6">
                    {type === "owner"
                        ? "Owner Listed Lands"
                        : "Agent Listed Lands"}
                </h1>

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* LEFT LISTINGS */}
                    <div className="lg:col-span-3">

                        <div className="space-y-4">
                            {filtered.map((property) => (
                                <PropertyCardList
                                    key={property.id}
                                    property={property}
                                />
                            ))}
                        </div>

                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="hidden lg:block space-y-6">

                        {/* POST PROPERTY */}
                        <div className="border rounded-lg p-6 bg-yellow-50 text-center">
                            <h3 className="font-semibold text-lg mb-2">
                                Sell / Lease Your Land
                            </h3>

                            <p className="text-sm text-gray-600 mb-4">
                                Reach investors looking for land near Tadoba
                            </p>

                            <button className="bg-yellow-500  text-black  font-bold px-4 py-2 rounded">
                                Post Property
                            </button>
                        </div>

                        {/* AGENT PROMO */}
                        <div className="border rounded-lg p-6 text-center">

                            <h3 className="font-semibold mb-3">
                                Verified Land Partners
                            </h3>

                            <p className="text-sm text-gray-600">
                                Connect with experienced agents around Tadoba.
                            </p>

                        </div>

                        {/* AD */}
                        <div className="border rounded-lg h-48 flex items-center justify-center text-gray-400">
                            Advertisement
                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default PropertiesList;