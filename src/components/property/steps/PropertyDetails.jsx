function PropertyDetails() {
    return (
        <div>

            <h2 className="text-lg font-semibold mb-4">
                Property Details
            </h2>

            <div className="space-y-4">

                <input
                    type="text"
                    placeholder="Property Title"
                    className="w-full border rounded px-3 py-2"
                />

                <input
                    type="text"
                    placeholder="Village / Location"
                    className="w-full border rounded px-3 py-2"
                />

                <select
                    className="w-full border rounded px-3 py-2"
                >
                    <option>Sale</option>
                    <option>Lease</option>
                </select>

            </div>

        </div>
    );
}

export default PropertyDetails;