// src/pages/PropertyDetails.jsx

import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyCarousel from "../components/property/SimilarPropertyCarousel";
import { useEffect, useState } from "react";
import { unlockContactApi } from "../api/leadApi";
import LoginSignupModal from "../components/auth/LoginSignupModal.jsx";
import {
    getPropertyByIdApi,
    getPropertiesApi
} from "../api/propertyApi";

function PropertyDetails({ onLoginClick, onSignupClick, onListProperty }) {

    const { id } = useParams();
    const MASKED_PHONE = "+91 XXX-XXX-1234";

    const [property, setProperty] = useState(null);
    const [similarProperties, setSimilarProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [phone, setPhone] = useState(MASKED_PHONE);
    const [contactName, setContactName] = useState("");
    const [loadingPhone, setLoadingPhone] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);

    // ✅ SOLD FLAG
    const isSold = property?.status === "SOLD";

    // Fetch Property Details
    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const res = await getPropertyByIdApi(id);
                setProperty(res.data);
            } catch (err) {
                console.error(" Property fetch error", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    useEffect(() => {
        setPhone(MASKED_PHONE);
        setContactName("");
    }, [id]);

    // Fetch Similar Properties
    useEffect(() => {
        if (!property) return;

        const fetchSimilar = async () => {
            try {
                const res = await getPropertiesApi({
                    gate: property.village
                });

                const filtered = res.data
                    .filter(p => p.id !== property.id)
                    .map(p => ({
                        ...p,
                        image: p.images?.[0]?.optimizedUrl || null
                    }));

                setSimilarProperties(filtered.slice(0, 10));
            } catch (err) {
                console.error(" Similar fetch error", err);
            }
        };

        fetchSimilar();
    }, [property]);

    const handleShowPhone = async () => {

        // 🔥 Block contact if SOLD (safety)
        if (isSold) return;

        const token = localStorage.getItem("token");

        if (!token) {
            setShowAuthModal(true);
            return;
        }

        try {
            if (phone !== MASKED_PHONE) return;

            setLoadingPhone(true);

            const res = await unlockContactApi(property.id);

            setPhone(res.data.phone);
            setContactName(res.data.name);

        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        } finally {
            setLoadingPhone(false);
        }
    };

    if (loading) return <div className="p-10">Loading...</div>;
    if (!property) return <div className="p-10">Property not found</div>;

    return (
        <>
            <Navbar
                onLoginClick={onLoginClick}
                onSignupClick={onSignupClick}
                onListProperty={onListProperty}
            />

            <div className="w-full bg-gray-100 mx-auto px-4 md:px-10 lg:px-20 mt-10 py-10">

                <div className="grid lg:grid-cols-3 gap-6">

                    {/* LEFT PANEL */}
                    <div className="lg:col-span-2">

                        {/* IMAGE + SOLD BADGE */}
                        <div className="relative">
                            <img
                                src={property.images?.[0] || "/fallback.jpg"}
                                className={`w-full h-80 md:h-96 object-cover rounded-lg ${isSold ? "grayscale-[30%]" : ""}`}
                                alt="property"
                            />

                            {isSold && (
                                <div className="absolute top-4 right-4">
                                    <span className="bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded">
                                        SOLD
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* THUMBNAILS */}
                        <div className="grid grid-cols-3 gap-2 mt-3">
                            {property.images?.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    className="h-20 md:h-24 w-full object-cover rounded"
                                    alt=""
                                />
                            ))}
                        </div>

                        {/* INVESTMENT SNAPSHOT */}
                        <div className="mt-4 border rounded-lg p-6 bg-green-50">
                            <h2 className="text-xl font-semibold mb-4">
                                Investment Snapshot
                            </h2>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                    <p className="text-gray-500">Tourism Potential</p>
                                    <p className="font-semibold">High</p>
                                </div>

                                <div>
                                    <p className="text-gray-500">Resort Potential</p>
                                    <p className="font-semibold">Good</p>
                                </div>

                                <div>
                                    <p className="text-gray-500">Road Connectivity</p>
                                    <p className="font-semibold">Direct Road</p>
                                </div>

                                <div>
                                    <p className="text-gray-500">Nearby Resorts</p>
                                    <p className="font-semibold">4 within 3 km</p>
                                </div>
                            </div>
                        </div>

                        {/* DESCRIPTION */}
                        <div className="mt-4 border rounded-lg p-6 shadow-sm bg-white">
                            <h2 className="text-xl font-semibold mb-4">
                                Description
                            </h2>

                            <p className="text-gray-700 leading-relaxed">
                                {property.description}
                            </p>
                        </div>

                        {/* LOCATION */}
                        <div className="mt-4 border rounded-lg p-6 shadow-sm bg-white">
                            <h2 className="text-xl font-semibold mb-4">
                                Location & Nearby Safari Gates
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">

                                <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
                                    Map Coming Soon
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-gray-500">Kolara Gate</span>
                                        <span className="font-medium">5 km</span>
                                    </div>
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-gray-500">Moharli Gate</span>
                                        <span className="font-medium">14 km</span>
                                    </div>
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-gray-500">Navegaon Gate</span>
                                        <span className="font-medium">18 km</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT PANEL */}
                    <div>
                        <div className="sticky top-24 border rounded-lg p-6 shadow-sm bg-white">

                            {/* 🔥 SOLD BANNER */}
                            {isSold && (
                                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded">
                                    <p className="text-red-700 font-semibold text-sm">
                                        This property is no longer available.
                                    </p>
                                    <p className="text-xs text-gray-600 mt-1">
                                        Explore similar properties below.
                                    </p>
                                </div>
                            )}

                            <h1 className="text-xl font-bold text-gray-800">
                                {property.title}
                            </h1>

                            <p className={`text-2xl font-semibold mt-2 ${isSold ? "text-gray-400 line-through" : "text-green-700"}`}>
                                {property.price}
                            </p>

                            <p className="mt-3 text-gray-600">
                                📍 Village: {property.village}
                            </p>

                            <p className="text-gray-600">
                                📐 Area: {property.area}
                            </p>

                            {/* CONTACT */}
                            <div className="mt-6 border-t pt-4">

                                <h3 className="font-semibold mb-3">
                                    {isSold ? "Property Closed" : "Contact Owner"}
                                </h3>

                                {!isSold && (
                                    <>
                                        <h1 className="font-semibold mb-3">
                                            Name: {contactName}
                                        </h1>

                                        <button
                                            onClick={handleShowPhone}
                                            disabled={loadingPhone}
                                            className="w-full bg-green-700 text-white py-2 rounded mb-2 hover:bg-green-800"
                                        >
                                            {loadingPhone ? "Fetching..." : phone}
                                        </button>

                                        <button className="w-full border border-green-700 text-green-700 py-2 rounded hover:bg-green-50">
                                            Send Enquiry
                                        </button>
                                    </>
                                )}

                                {isSold && (
                                    <button
                                        disabled
                                        className="w-full bg-gray-200 text-gray-500 py-2 rounded cursor-not-allowed"
                                    >
                                        Not Available
                                    </button>
                                )}

                            </div>

                        </div>
                    </div>

                </div>

                {/* SIMILAR PROPERTIES */}
                <div className="mt-6 border rounded-lg p-6 shadow-sm bg-white">
                    {similarProperties.length === 0 ? (
                        <div className="text-gray-500 text-center py-4">
                            No similar properties found
                        </div>
                    ) : (
                        <PropertyCarousel
                            title="Similar Lands/Properties in same area"
                            properties={similarProperties}
                        />
                    )}
                </div>

            </div>

            <Footer />

            <LoginSignupModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
                onSuccess={() => {
                    setShowAuthModal(false);
                    handleShowPhone();
                }}
            />

        </>
    );
}

export default PropertyDetails;