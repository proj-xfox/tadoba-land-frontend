//src/components/leads/LeadCaptureModal.jsx
import { useState } from "react";
import { createLeadApi } from "../../api/leadApi";
import toast from "react-hot-toast";

function LeadCaptureModal({ isOpen, onClose, propertyId, agentId, onSuccess }) {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async () => {
        try {
            if (!name || !phone) {
                toast.error("Name and phone required");
                return;
            }

            setLoading(true);

            await createLeadApi({
                name,
                phone,
                email,
                propertyId,
                agentId
            });

            localStorage.setItem("leadUser", JSON.stringify({
                name,
                phone,
                email
            }));

            onSuccess(); // show contact details

        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">

            <div className="bg-white rounded-lg w-full max-w-md p-6 relative">

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500"
                >
                    ✕
                </button>

                {/* Header */}
                <h2 className="text-lg font-semibold mb-4">
                    Enter your WhatsApp number to view contact details
                </h2>

                {/* Form */}
                <div className="space-y-3">

                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                    />

                    <input
                        type="email"
                        placeholder="Email (optional)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                    />

                    <input
                        type="tel"
                        placeholder="WhatsApp Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                    />

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-full bg-green-700 text-white py-2 rounded"
                    >
                        {loading ? "Please wait..." : "Continue"}
                    </button>

                </div>

            </div>
        </div>
    );
}

export default LeadCaptureModal;