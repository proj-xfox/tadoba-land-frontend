function PriceDetails() {
    return (
        <div>

            <h2 className="text-lg font-semibold mb-4">
                Price & Area Details
            </h2>

            <div className="space-y-4">

                <input
                    type="text"
                    placeholder="Land Area (Example: 5 Acres)"
                    className="w-full border rounded px-3 py-2"
                />

                <input
                    type="number"
                    placeholder="Price"
                    className="w-full border rounded px-3 py-2"
                />

            </div>

        </div>
    );
}

export default PriceDetails;