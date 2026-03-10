// src/components/property/AddPropertyForm.jsx
import { useState } from "react";

function AddPropertyForm() {

    const [form, setForm] = useState({
        title: "",
        village: "",
        type: "Sale",
        area: "",
        price: "",
        description: "",
        listedBy: "owner"
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white border rounded-lg p-6 space-y-5"
        >

            {/* Title */}
            <div>
                <label className="block text-sm font-medium mb-1">
                    Property Title
                </label>
                <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                    placeholder="Example: 5 Acre Resort Land"
                />
            </div>

            {/* Village */}
            <div>
                <label className="block text-sm font-medium mb-1">
                    Village / Location
                </label>
                <input
                    type="text"
                    name="village"
                    value={form.village}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                    placeholder="Example: Kolara"
                />
            </div>

            {/* Type */}
            <div>
                <label className="block text-sm font-medium mb-1">
                    Property Type
                </label>
                <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                >
                    <option>Sale</option>
                    <option>Lease</option>
                </select>
            </div>

            {/* Area */}
            <div>
                <label className="block text-sm font-medium mb-1">
                    Land Area
                </label>
                <input
                    type="text"
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                    placeholder="Example: 5 Acres"
                />
            </div>

            {/* Price */}
            <div>
                <label className="block text-sm font-medium mb-1">
                    Price
                </label>
                <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                    placeholder="Enter price"
                />
            </div>

            {/* Description */}
            <div>
                <label className="block text-sm font-medium mb-1">
                    Description
                </label>
                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                    rows="4"
                    placeholder="Tell buyers about this land..."
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800"
            >
                Submit Property
            </button>

        </form>
    );
}

export default AddPropertyForm;