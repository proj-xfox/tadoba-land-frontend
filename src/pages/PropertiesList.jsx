import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyCardList from "../components/property/PropertyCardList";
import SafariGates from "../components/home/SafariGatesNew";

import {
    getOwnerPropertiesApi,
    getAgentPropertiesApi
} from "../api/propertyApi";

import useFilters from "../hooks/useFilters";

function PropertiesList() {

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    const { type } = useParams();
    const { gates } = useFilters();

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true); // ✅ IMPORTANT FIX

            try {
                let res;

                const params = gates.length ? { gates } : {};

                if (type === "owner") {
                    res = await getOwnerPropertiesApi(params);
                } else {
                    res = await getAgentPropertiesApi(params);
                }

                setProperties(res.data || []);

            } catch (err) {
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, [type, gates.join(",")]);

    const formatted = (properties || []).map(p => ({
        ...p,
        village: p.gate,
        price: `₹ ${p.price?.toLocaleString()}`,
        area: `${p.area || ""} ${p.areaUnit || ""}`,
        image: p.image?.thumbnail || "/placeholder.jpg",
        listedBy: type
    }));

    return (
        <>
            <Navbar />

            <SafariGates />

            <div className="w-full bg-gray-100 mx-auto mt-10 px-20 py-10">

                <h1 className="text-2xl font-semibold mb-4">
                    {type === "owner"
                        ? "Owner Listed Lands"
                        : "Agent Listed Lands"}
                </h1>

                {gates.length > 0 && (
                    <div className="mb-6 text-sm text-gray-600">
                        Showing results for:{" "}
                        <b>{gates.join(", ")}</b>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* LEFT LISTINGS */}
                    <div className="lg:col-span-3">

                        {loading ? (
                            // ✅ SHIMMER LOADING
                            <div className="space-y-4">
                                {[...Array(6)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="animate-pulse bg-white p-4 rounded-lg shadow flex gap-4"
                                    >
                                        {/* Image */}
                                        <div className="w-40 h-28 bg-gray-200 rounded" />

                                        {/* Content */}
                                        <div className="flex-1 space-y-2">
                                            <div className="h-4 bg-gray-200 rounded w-3/4" />
                                            <div className="h-4 bg-gray-200 rounded w-1/2" />
                                            <div className="h-4 bg-gray-200 rounded w-1/3" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {formatted.map((property) => (
                                    <PropertyCardList
                                        key={property.id}
                                        property={property}
                                    />
                                ))}
                            </div>
                        )}

                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="hidden lg:block space-y-6">

                        <div className="border rounded-lg p-6 bg-yellow-50 text-center">
                            <h3 className="font-semibold text-lg mb-2">
                                Sell / Lease Your Land
                            </h3>

                            <p className="text-sm text-gray-600 mb-4">
                                Reach investors looking for land near Tadoba
                            </p>

                            <button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded">
                                Post Property
                            </button>
                        </div>

                        <div className="border rounded-lg p-6 text-center">
                            <h3 className="font-semibold mb-3">
                                Verified Land Partners
                            </h3>

                            <p className="text-sm text-gray-600">
                                Connect with experienced agents around Tadoba.
                            </p>
                        </div>

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