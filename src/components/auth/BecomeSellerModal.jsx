// src/components/auth/BecomeSellerModal.jsx
import { useState } from "react";

function BecomeSellerModal({ isOpen, onClose, onConfirm }) {

    const [type, setType] = useState("OWNER");

    if (!isOpen) return null;

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

                <h2 className="text-lg font-semibold mb-4">
                    Start Listing Your Property as a Seller
                </h2>

                <p className="text-sm text-gray-600 mb-4">
                    You're currently browsing as a buyer. Choose how you want to list:
                </p>

                {/* TYPE SELECT */}
                <div className="flex gap-4 mb-6">

                    <button
                        onClick={() => setType("OWNER")}
                        className={`flex-1 border rounded-md py-2 transition 
                            ${type === "OWNER"
                                ? "bg-green-600 text-white border-green-600"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                            }`}
                    >
                        Owner
                    </button>

                    <button
                        onClick={() => setType("AGENT")}
                        className={`flex-1 border rounded-md py-2 transition 
                                    ${type === "AGENT"
                                ? "bg-green-600 text-white border-green-600"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                            }`}
                    >
                        Agent
                    </button>

                </div>

                {/* ACTION */}
                <button
                    type="button"
                    onClick={() => onConfirm(type)}
                    className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
                >
                    Continue
                </button>

            </div>
        </div>
    );
}

export default BecomeSellerModal;