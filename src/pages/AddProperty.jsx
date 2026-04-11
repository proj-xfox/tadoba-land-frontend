import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AddPropertyStepper from "../components/property/AddPropertyStepper";
import PropertyDetails from "../components/property/steps/PropertyDetails";
import PriceDetails from "../components/property/steps/PriceDetails";
import Photos from "../components/property/steps/Photos";

import { createPropertyApi, activatePropertyApi } from "../api/propertyApi";
import { getMyAgentProfileApi, saveAgentProfileApi } from "../api/agentApi";
import AgentProfileModal from "../components/agent/AgentProfileModal";
import { useNavigate } from "react-router-dom";

function AddProperty() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [propertyId, setPropertyId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        address: "",
        city: "Chandrapur",
        gate: "",
        type: "",
        area: "",
        areaUnit: "",
        price: "",
        contactName: "",
        contactPhone: ""
    });

    const validateStep = () => {
        if (step === 1) {
            if (!formData.title || !formData.address || !formData.city) {
                alert("Fill title, address, city");
                return false;
            }
        }

        if (step === 2) {
            if (!formData.contactName || !formData.contactPhone) {
                alert("Add contact details");
                return false;
            }
        }

        return true;
    };

    const handleNext = async () => {
        if (!validateStep()) return;

        // 🔥 Create property as DRAFT
        if (step === 2 && !propertyId) {
            try {
                setLoading(true);

                const res = await createPropertyApi({
                    ...formData,
                    status: "DRAFT"
                });

                const id = res?.data?.id;
                console.log("🔥 EXTRACTED ID==============:", id);

                setPropertyId(id);

                alert("Draft created. Now upload photos.");

            } catch (err) {
                console.error(err);
                alert("Failed to create property");
                return;
            } finally {
                setLoading(false);
            }
        }

        setStep(prev => prev + 1);
    };

    const checkAgentProfileAndShowModal = async () => {
        try {
            const res = await getMyAgentProfileApi();

            if (!res?.data) {
                setShowProfileModal(true);
            } else {
                navigate("/"); // Profile exists, go to homepage
            }
        } catch (err) {
            console.error("Profile check failed", err);
        }
    };

    const handleFinish = async () => {
        try {
            if (!propertyId) {
                alert("Property not ready");
                return;
            }

            await activatePropertyApi(propertyId);
            alert("Property is now LIVE 🚀");
            checkAgentProfileAndShowModal();

        } catch (err) {
            alert("Failed to activate");
        }
    };

    const handleSaveProfile = async (form) => {
        try {
            await saveAgentProfileApi(form);
            setShowProfileModal(false);
            alert("Profile completed! You'll get more enquiries 🚀");
            navigate("/");
        } catch (err) {
            console.error(err);
            alert("Failed to save profile");
        }
    };

    const renderStep = () => {
        if (step === 1) {
            return <PropertyDetails formData={formData} setFormData={setFormData} />;
        }

        if (step === 2) {
            return <PriceDetails formData={formData} setFormData={setFormData} />;
        }

        if (step === 3) {
            if (!propertyId) return <p>Error: Property not created</p>;

            return <Photos propertyId={propertyId} />;
        }
    };

    return (
        <>
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 pt-28 pb-16">
                <h1 className="text-2xl font-semibold mb-2">
                    List Your Land Near Tadoba
                </h1>

                <p className="text-gray-500 mb-6">
                    Step {step} of 3
                </p>

                <div className="grid grid-cols-4 gap-8">
                    <AddPropertyStepper step={step} />

                    <div className="col-span-3 bg-white border rounded-lg p-6">
                        {renderStep()}

                        <div className="flex justify-between mt-6">
                            {step > 1 && (
                                <button onClick={() => setStep(step - 1)} className="px-4 py-2 border rounded">
                                    Back
                                </button>
                            )}

                            {step < 3 && (
                                <button
                                    onClick={handleNext}
                                    disabled={loading}
                                    className="px-6 py-2 bg-green-700 text-white rounded"
                                >
                                    {loading ? "Creating..." : "Continue"}
                                </button>
                            )}

                            {step === 3 && (
                                <button
                                    onClick={handleFinish}
                                    className="px-6 py-2 bg-green-700 text-white rounded"
                                >
                                    Publish Property
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            <AgentProfileModal
                isOpen={showProfileModal}
                onClose={() => {
                    setShowProfileModal(false);
                    navigate("/");
                }}
                onSave={handleSaveProfile}
            />
        </>
    );
}

export default AddProperty;