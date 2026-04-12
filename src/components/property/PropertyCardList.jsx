//src/components/property/PropertyCardList.jsx
import { Link } from "react-router-dom";
import { Heart, Share2 } from "lucide-react";
function PropertyCardList({ property }) {
    console.log("🔥 PropertyCardList property===========:", property);

    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12">


                {/* IMAGE */}
                <div className="md:col-span-3 relative" >

                    {/* ICONS */}
                    <div className="absolute top-2 right-2 flex gap-2">

                        <button className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100">
                            <Heart size={18} className="text-gray-700" />
                        </button>

                        <button className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100">
                            <Share2 size={18} className="text-gray-700" />
                        </button>

                    </div>
                    <img
                        src={property.image}
                        alt={property.title}
                        className="h-48 md:h-40 w-full object-cover"
                    />
                </div>

                {/* DETAILS */}
                <div className="md:col-span-6 p-4">

                    {/* TITLE */}
                    <h3 className="font-semibold text-lg text-gray-800">
                        {property.title}
                    </h3>

                    {/* LOCATION */}
                    <p className="text-sm text-gray-500 mt-1">
                        📍 {property.village}
                    </p>

                    {/* FEATURES */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-3">

                        <span>📐 {property.area}</span>
                        <span>📄 {property.type}</span>
                        <span>👤 {property.listedBy}</span>

                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-gray-500 mt-3 line-clamp-2">
                        {property.description || "No description available."}
                    </p>

                </div>

                {/* PRICE + CTA */}
                <div className="md:col-span-3 bg-gray-100 p-4 md:border-l flex flex-col justify-center items-center h-full">

                    {/* PRICE */}
                    <div className="text-center mb-4">

                        <div className="text-xl font-bold text-gray-900">
                            {property.price}
                        </div>

                        <p className="text-xs text-gray-400">
                            Negotiable
                        </p>

                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-col gap-2 w-full max-w-[160px]">

                        <Link
                            to={`/property/${property.id}`}
                            className="bg-orange-700 text-white text-sm py-1.5 rounded text-center hover:bg-green-800"
                        >
                            View Details
                        </Link>

                        {/* <button className="border border-green-700 text-green-700 text-sm py-1.5 rounded hover:bg-green-50">
                            Contact Owner
                        </button> */}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default PropertyCardList;