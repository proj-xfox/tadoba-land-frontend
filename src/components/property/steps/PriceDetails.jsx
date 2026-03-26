// src/components/property/steps/PriceDetails.jsx

function PriceDetails({ formData, setFormData }) {

    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div>

            <h2 className="text-lg font-semibold mb-4">
                Price & Contact Details
            </h2>

            <div className="space-y-4">

                <input
                    type="number"
                    placeholder="Total Price (₹)"
                    value={formData.price}
                    onChange={(e) => handleChange("price", e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />

                <input
                    type="text"
                    placeholder="Contact Name"
                    value={formData.contactName}
                    onChange={(e) => handleChange("contactName", e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />

                <input
                    type="tel"
                    placeholder="Contact Phone"
                    value={formData.contactPhone}
                    onChange={(e) => handleChange("contactPhone", e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />

            </div>
        </div>
    );
}

export default PriceDetails;