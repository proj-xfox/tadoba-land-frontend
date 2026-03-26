// src/components/property/AddPropertyStepper.jsx
function AddPropertyStepper({ step }) {

    const steps = [
        "Property Details",
        "Price & Contact",
        "Photos"
    ];

    return (
        <div className="border rounded-lg p-4">

            <h3 className="font-semibold mb-4">
                Post your property
            </h3>

            {steps.map((s, i) => {

                const stepNumber = i + 1;

                return (
                    <div
                        key={i}
                        className={`py-2 flex items-center gap-2 ${step === stepNumber
                            ? "font-semibold text-green-700"
                            : "text-gray-500"
                            }`}
                    >
                        {/* Step indicator circle */}
                        <div className={`w-6 h-6 flex items-center justify-center rounded-full text-xs ${step === stepNumber
                            ? "bg-green-700 text-white"
                            : "bg-gray-200"
                            }`}>
                            {stepNumber}
                        </div>

                        {s}
                    </div>
                );
            })}

        </div>
    );
}

export default AddPropertyStepper;