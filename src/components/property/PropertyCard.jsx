// src/components/property/PropertyCard.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeadCaptureModal from "../leads/LeadCaptureModal.jsx";
import { createLeadApi } from "../../api/leadApi";

function PropertyCard({ property }) {

    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleViewDetails = async () => {
        const token = localStorage.getItem("token");
        const leadUserData = localStorage.getItem("leadUser");

        console.log("PROPERTY============:", property);
        console.log("PROPERTY ID ============:", property.id);

        // Case 1: Logged-in user
        if (token) {
            navigate(`/property/${property.id}`);
            return;
        }

        // Case 2: Guest user already identified
        if (leadUserData) {
            const user = JSON.parse(leadUserData);

            try {
                await createLeadApi({
                    ...user,
                    propertyId: property.id
                });

                navigate(`/property/${property.id}`);
            } catch (err) {
                alert("Something went wrong");
            }

            return;
        }

        //  Case 3: New user → show modal
        setShowModal(true);
    };

    return (
        <>
            <div className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition">

                <img
                    src={property.image}
                    alt={property.title}
                    className="h-48 w-full object-cover"
                />

                <div className="p-4">

                    <h2 className="text-lg font-semibold">
                        {property.title}
                    </h2>

                    <p className="text-gray-600">
                        {property.village}
                    </p>

                    <div className="flex justify-between text-sm text-gray-700 mt-2">
                        <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded">
                            {property.area}
                        </span>

                        <span className="text-xs font-semibold bg-red-100 px-2 py-1 rounded">
                            {property.type}
                        </span>
                    </div>

                    <p className="text-green-700 font-bold mt-2">
                        {property.price}
                    </p>

                    <button
                        onClick={handleViewDetails}
                        className="block w-full mt-3 text-center text-green-700 font-medium border border-green-200 py-2 rounded-lg hover:bg-green-50 transition"
                    >
                        View Details
                    </button>

                </div>
            </div>

            {/* 🔥 Popup */}
            <LeadCaptureModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                propertyId={property.id}
                onSuccess={() => {
                    setShowModal(false);
                    navigate(`/property/${property.id}`);
                }}
            />
        </>
    );
}

export default PropertyCard;