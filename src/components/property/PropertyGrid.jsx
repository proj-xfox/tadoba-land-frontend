// src/components/property/PropertyGrid.jsx
import PropertyCard from "./PropertyCard";

function PropertyGrid({ properties }) {

    if (!properties || properties.length === 0) {
        return (
            <p className="text-center text-gray-500">
                No properties found
            </p>
        );
    }

    return (
        <div className="grid md:grid-cols-4 gap-6">

            {properties.map((property) => (
                <PropertyCard
                    key={property.id}
                    property={property}
                />
            ))}

        </div>
    );
}

export default PropertyGrid;