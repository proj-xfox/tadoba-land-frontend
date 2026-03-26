// src/pages/PropertiesList.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyCardList from "../components/property/PropertyCardList";
import SafariGates from "../components/home/SafariGates";
import {
    getOwnerPropertiesApi,
    getAgentPropertiesApi
} from "../api/propertyApi";

function PropertiesList() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    const { type } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res;

                if (type === "owner") {
                    res = await getOwnerPropertiesApi();
                } else {
                    res = await getAgentPropertiesApi();
                }

                setProperties(res.data || []);

            } catch (err) {
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [type]);

    const formatted = (properties || []).map(p => ({
        ...p,
        village: p.gate,
        price: `₹ ${p.price?.toLocaleString()}`,
        area: `${p.area || ""} ${p.areaUnit || ""}`,
        image: p.image?.thumbnail || "/placeholder.jpg",
        listedBy: type   // "owner" or "agent"
    }));

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
                            {formatted.map((property) => (
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