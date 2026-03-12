import { Link } from "react-router-dom";

function PropertyCardList({ property }) {

    return (
        <div className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition">

            <div className="grid grid-cols-1 md:grid-cols-12">

                {/* IMAGE */}
                <div className="md:col-span-3">
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
                        Ideal land parcel for tourism development near Tadoba forest zone.
                        Good road access and growing investor demand.
                    </p>

                </div>

                {/* PRICE + CTA */}
                <div className="md:col-span-3 p-4 md:border-l flex flex-col justify-between">

                    <div className="mb-4 md:mb-0">

                        <div className="text-xl md:text-2xl font-bold text-gray-900">
                            {property.price}
                        </div>

                        <p className="text-xs text-gray-400">
                            Negotiable
                        </p>

                    </div>

                    <div className="flex flex-col gap-2">

                        <Link
                            to={`/property/${property.id}`}
                            className="block bg-green-700 text-white text-center py-2 rounded hover:bg-green-800"
                        >
                            View Details
                        </Link>

                        <button className="border border-green-700 text-green-700 py-2 rounded hover:bg-green-50">
                            Contact Owner
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default PropertyCardList;