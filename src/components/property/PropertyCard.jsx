import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeadCaptureModal from "../leads/LeadCaptureModal.jsx";
import { createLeadApi } from "../../api/leadApi";
import toast from "react-hot-toast";

function PropertyCard({ property }) {

    const [showModal, setShowModal] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);

    const navigate = useNavigate();

    const isSold = property.status === "SOLD";

    const handleViewDetails = async () => {

        // 🔥 If SOLD → skip lead capture logic (important decision)
        if (isSold) {
            navigate(`/property/${property.id}`);
            return;
        }

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
                toast.error("Something went wrong");
            }

            return;
        }

        setShowModal(true);
    };

    const imageSrc = property.image || "/placeholder.jpg";

    return (
        <>
            <div className={`bg-white shadow rounded overflow-hidden hover:shadow-lg transition ${isSold ? "opacity-80" : ""}`}>

                {/* 🔥 IMAGE */}
                <div className="relative h-48 w-full overflow-hidden">

                    {/* 🔥 STATUS CHIP */}
                    <div className="absolute top-2 right-2 z-10">
                        <span className={`text-xs font-semibold px-2 py-1 rounded 
                            ${isSold ? "bg-red-600 text-white" : "bg-green-100 text-green-700"}`}>
                            {isSold ? "SOLD" : "AVAILABLE"}
                        </span>
                    </div>

                    {/* Blurred layer */}
                    <img
                        src={imageSrc}
                        alt={property.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 
                            ${imgLoaded ? "blur-0 scale-100" : "blur-md scale-110"} 
                            ${isSold ? "grayscale-[30%]" : ""}`}
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

                    {/* 🔥 PRICE */}
                    <p className={`font-bold mt-2 ${isSold ? "text-gray-400 line-through" : "text-green-700"}`}>
                        {property.price}
                    </p>

                    {/* 🔥 CTA */}
                    <button
                        onClick={handleViewDetails}
                        className={`block w-full mt-3 text-center font-medium border py-2 rounded-lg transition
                            ${isSold
                                ? "text-gray-600 border-gray-200 hover:bg-gray-50"
                                : "text-green-700 border-green-200 hover:bg-green-50"
                            }`}
                    >
                        {isSold ? "View Details" : "View Details"}
                    </button>

                </div>
            </div>

            {/* 🔥 Modal only for ACTIVE */}
            {!isSold && (
                <LeadCaptureModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    propertyId={property.id}
                    onSuccess={() => {
                        setShowModal(false);
                        navigate(`/property/${property.id}`);
                    }}
                />
            )}
        </>
    );
}

export default PropertyCard;