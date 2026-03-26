// src/components/property/steps/PropertyDetails.jsx

function PropertyDetails({ formData, setFormData }) {

    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div>

            <h2 className="text-lg font-semibold mb-4">
                Property Details
            </h2>

            <div className="space-y-4">

                <input
                    type="text"
                    placeholder="Property Title"
                    value={formData.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />

                <input
                    type="text"
                    placeholder="Address / Nearby Landmark"
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />

                <select
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    className="w-full border rounded px-3 py-2"
                >
                    <option value="">Select City</option>
                    <option value="CHANDRAPUR">Chandrapur</option>
                    <option value="NAGPUR">Nagpur</option>
                </select>

                <select
                    value={formData.gate}
                    onChange={(e) => handleChange("gate", e.target.value)}
                    className="w-full border rounded px-3 py-2"
                >
                    <option value="">Select Gate</option>
                    <option value="MOHARLI">Moharli</option>
                    <option value="KOLARA">Kolara</option>
                    <option value="NAVEGAON">Navegaon</option>
                    <option value="ZARI">Zari</option>
                </select>

                <select
                    value={formData.type}
                    onChange={(e) => handleChange("type", e.target.value)}
                    className="w-full border rounded px-3 py-2"
                >
                    <option value="">Property Type</option>
                    <option value="FARM">Farm</option>
                    <option value="PLOT">Plot</option>
                    <option value="AGRICULTURE">Agriculture</option>
                    <option value="RESIDENTIAL">Residential</option>
                    <option value="COMMERCIAL">Commercial</option>
                </select>

                <div className="flex gap-2">
                    <input
                        type="number"
                        placeholder="Area"
                        value={formData.area}
                        onChange={(e) => handleChange("area", e.target.value)}
                        className="w-2/3 border rounded px-3 py-2"
                    />

                    <select
                        value={formData.areaUnit}
                        onChange={(e) => handleChange("areaUnit", e.target.value)}
                        className="w-1/3 border rounded px-3 py-2"
                    >
                        <option value="">Unit</option>
                        <option value="ACRE">Acre</option>
                        <option value="GUNTHA">Guntha</option>
                        <option value="SQFT">Sqft</option>
                    </select>
                </div>

                <textarea
                    placeholder="Description (optional)"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />

            </div>
        </div>
    );
}

export default PropertyDetails;