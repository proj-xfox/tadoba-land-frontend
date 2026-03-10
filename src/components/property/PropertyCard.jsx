// src/components/property/PropertyCard.jsx
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
    return (
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
                    <span>{property.area}</span>
                    <span>{property.type}</span>
                </div>

                <p className="text-green-700 font-bold mt-2">
                    {property.price}
                </p>

                <Link
                    to={`/property/${property.id}`}
                    className="block mt-3 text-center bg-green-700 text-white py-2 rounded hover:bg-green-800"
                >
                    View Details
                </Link>

            </div>
        </div>
    );
}

export default PropertyCard;