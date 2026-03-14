import { Link } from "react-router-dom";
import SimilarPropertyCarousel from "./SimilarPropertyCarousel";

function SimilarPropertyCard({ property }) {
    return (

        <Link
            to={`/property/${property.id}`}
            className="block"
        >

            <div className="bg-white border rounded-lg shadow-sm p-3 w-[220px] flex-shrink-0 hover:shadow-md transition">

                <img
                    src={property.image}
                    alt={property.title}
                    className="h-24 w-full object-cover rounded"
                />

                <div className="mt-2">

                    <h3 className="text-sm font-semibold truncate">
                        {property.title}
                    </h3>

                    <p className="text-xs text-gray-500">
                        {property.village}
                    </p>

                    <div className="flex justify-between items-center mt-2">

                        <span className="text-green-700 font-semibold text-sm">
                            {property.price}
                        </span>

                        <span className="text-xs font-semibold bg-red-100 px-2 py-1 rounded">
                            {property.type}
                        </span>

                        <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded">
                            {property.area}
                        </span>

                    </div>

                </div>

            </div>

        </Link>
    );
}

export default SimilarPropertyCard;