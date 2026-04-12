import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeadCaptureModal from "../leads/LeadCaptureModal.jsx";
import { createLeadApi } from "../../api/leadApi";

function PropertyCard({ property }) {

    const [showModal, setShowModal] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false); // ✅ NEW

    const navigate = useNavigate();

    const handleViewDetails = async () => {
        const token = localStorage.getItem("token");
        const leadUserData = localStorage.getItem("leadUser");

        if (token) {
            navigate(`/property/${property.id}`);
            return;
        }

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

        setShowModal(true);
    };

    // ✅ Safe image fallback
    const imageSrc = property.image || "/placeholder.jpg";

    return (
        <>
            <div className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition">

                {/* 🔥 IMAGE WITH BLUR EFFECT */}
                <div className="relative h-48 w-full overflow-hidden">

                    {/* Blurred layer */}
                    <img
                        src={imageSrc}
                        alt={property.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 
                            ${imgLoaded ? "blur-0 scale-100" : "blur-md scale-110"}`}
                    />

                    {/* Main image */}
                    <img
                        src={imageSrc}
                        alt={property.title}
                        onLoad={() => setImgLoaded(true)}
                        className={`w-full h-full object-cover transition-opacity duration-500 
                            ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                    />

                </div>

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