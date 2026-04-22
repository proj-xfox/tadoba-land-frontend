import { Link } from "react-router-dom";
import { Heart, Share2 } from "lucide-react";

function PropertyCardList({ property }) {

    const handleShare = () => {
        const OG_BASE = import.meta.env.VITE_API_BASE_URL;
        const url = `${OG_BASE}/og/property/${property.id}`;
        const text = `Check this land on TadobaLand 👇\n${url}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition">

            {/* MOBILE LAYOUT */}
            <div className="block md:hidden">

                {/* IMAGE */}
                <div className="relative">
                    <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-40 object-cover"
                    />

                    {/* ICONS */}
                    <div className="absolute top-2 right-2 flex gap-2">
                        <button className="bg-white p-1.5 rounded-full shadow">
                            <Heart size={16} />
                        </button>
                        <button onClick={handleShare} className="bg-white p-1.5 rounded-full shadow">
                            <Share2 size={16} />
                        </button>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="p-3">

                    {/* TITLE + PRICE */}
                    <div className="flex justify-between items-start gap-2">
                        <h3 className="font-semibold text-base text-gray-800 line-clamp-2">
                            {property.title}
                        </h3>

                        <div className="text-right">
                            <div className="text-base font-bold text-gray-900">
                                {property.price}
                            </div>
                            <p className="text-[10px] text-gray-400">Negotiable</p>
                        </div>
                    </div>

                    {/* LOCATION */}
                    <p className="text-xs text-gray-500 mt-1">
                        📍 {property.village}
                    </p>

                    {/* FEATURES */}
                    <div className="flex gap-3 text-xs text-gray-600 mt-2">
                        <span>📐 {property.area}</span>
                        <span>📄 {property.type}</span>
                    </div>

                    {/* CTA */}
                    <Link
                        to={`/property/${property.id}`}
                        className="block mt-3 text-center bg-green-700 text-white py-2 rounded-lg text-sm font-medium"
                    >
                        View Details
                    </Link>

                </div>
            </div>

            {/* DESKTOP LAYOUT (unchanged structure) */}
            <div className="hidden md:grid grid-cols-12">

                {/* IMAGE */}
                <div className="col-span-3 relative">
                    <img
                        src={property.image}
                        alt={property.title}
                        className="h-40 w-full object-cover"
                    />

                    <div className="absolute top-2 right-2 flex gap-2">
                        <button className="bg-white p-1.5 rounded-full shadow">
                            <Heart size={18} />
                        </button>
                        <button onClick={handleShare} className="bg-white p-1.5 rounded-full shadow">
                            <Share2 size={18} />
                        </button>
                    </div>
                </div>

                {/* DETAILS */}
                <div className="col-span-6 p-4">
                    <h3 className="font-semibold text-lg text-gray-800">
                        {property.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                        📍 {property.village}
                    </p>

                    <div className="flex gap-4 text-sm text-gray-600 mt-3">
                        <span>📐 {property.area}</span>
                        <span>📄 {property.type}</span>
                        <span>👤 {property.listedBy}</span>
                    </div>

                    <p className="text-sm text-gray-500 mt-3 line-clamp-2">
                        {property.description || "No description available."}
                    </p>
                </div>

                {/* PRICE */}
                <div className="col-span-3 bg-gray-100 p-4 border-l flex flex-col justify-center items-center">
                    <div className="text-xl font-bold">{property.price}</div>
                    <p className="text-xs text-gray-400 mb-3">Negotiable</p>

                    <Link
                        to={`/property/${property.id}`}
                        className="bg-orange-700 text-white text-sm py-2 px-4 rounded"
                    >
                        View Details
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default PropertyCardList;