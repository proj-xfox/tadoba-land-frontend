import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AddPropertyStepper from "../components/property/AddPropertyStepper";
import PropertyDetails from "../components/property/steps/PropertyDetails";
import PriceDetails from "../components/property/steps/PriceDetails";
import Photos from "../components/property/steps/Photos";

function AddProperty() {

    const [step, setStep] = useState(1);

    const renderStep = () => {
        if (step === 1) return <PropertyDetails />;
        if (step === 2) return <PriceDetails />;
        if (step === 3) return <Photos />;
    };

    return (
        <>
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 pt-28 pb-16">

                <h1 className="text-2xl font-semibold mb-6">
                    Post Your Land
                </h1>

                <div className="grid grid-cols-4 gap-8">

                    {/* LEFT STEPPER */}
                    <AddPropertyStepper step={step} />

                    {/* FORM AREA */}
                    <div className="col-span-3 bg-white border rounded-lg p-6">

                        {renderStep()}

                        <div className="flex justify-between mt-6">
                            {step > 1 && (
                                <button
                                    onClick={() => setStep(step - 1)}
                                    className="px-4 py-2 border rounded"
                                >
                                    Back
                                </button>
                            )}

                            {step < 3 && (
                                <button
                                    onClick={() => setStep(step + 1)}
                                    className="px-6 py-2 bg-green-700 text-white rounded"
                                >
                                    Continue
                                </button>
                            )}

                            {step === 3 && (
                                <button
                                    className="px-6 py-2 bg-green-700 text-white rounded"
                                >
                                    Submit Property
                                </button>
                            )}
                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default AddProperty;