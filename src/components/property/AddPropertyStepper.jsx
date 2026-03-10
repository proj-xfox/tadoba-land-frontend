function AddPropertyStepper({ step }) {

    const steps = [
        "Property Details",
        "Price Details",
        "Photos"
    ];

    return (
        <div className="border rounded-lg p-4">

            <h3 className="font-semibold mb-4">
                Post your property
            </h3>

            {steps.map((s, i) => (
                <div
                    key={i}
                    className={`py-2 ${step === i + 1
                            ? "font-semibold text-green-700"
                            : "text-gray-500"
                        }`}
                >
                    {i + 1}. {s}
                </div>
            ))}

        </div>
    );
}

export default AddPropertyStepper;