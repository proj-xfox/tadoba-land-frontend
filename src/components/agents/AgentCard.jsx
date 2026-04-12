// src/components/agents/AgentCard.jsx

import { Phone } from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LeadCaptureModal from "../leads/LeadCaptureModal.jsx";
import { createLeadApi } from "../../api/leadApi";

function AgentCard({ agent }) {

    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const [showContact, setShowContact] = useState(false);

    /* const handleShowContact = async () => {
        const token = localStorage.getItem("token");
        const leadUserData = localStorage.getItem("leadUser");

        // Case 1: Logged in
        if (token) {
            try {
                await createLeadApi({
                    agentId: agent.id
                });

                navigate(`/agent/${agent.slug}`);
            } catch (err) {
                console.error(err);
            }
            return;
        }

        // Case 2: Existing guest
        if (leadUserData) {
            const user = JSON.parse(leadUserData);

            try {
                await createLeadApi({
                    ...user,
                    agentId: agent.id   // 🔥 CHANGE HERE
                });

                navigate(`/agent/${agent.slug}`);
            } catch (err) {
                alert("Something went wrong");
            }

            return;
        }

        // Case 3: New guest
        setShowModal(true);
    }; */

    const handleShowContact = async () => {
        const token = localStorage.getItem("token");
        const leadUserData = localStorage.getItem("leadUser");

        // Logged-in
        if (token) {
            const storedUser = localStorage.getItem("user");
            const user = JSON.parse(storedUser);

            try {
                await createLeadApi({ ...user, agentId: agent.id });
                setShowContact(true); // ✅ show inline
            } catch (err) {
                console.error(err);
            }
            return;
        }

        // Existing guest
        if (leadUserData) {
            const user = JSON.parse(leadUserData);

            try {
                await createLeadApi({
                    ...user,
                    agentId: agent.id
                });

                setShowContact(true); // ✅ show inline
            } catch (err) {
                alert("Something went wrong");
            }

            return;
        }

        // New guest
        setShowModal(true);
    };

    return (
        <div className="min-w-[255px] bg-gray-50 border border-gray-200 rounded-xl p-4 hover:shadow-md transition">

            {/* TOP */}
            <div className="flex items-center justify-between mb-2">

                <Link
                    to={`/agent/${agent.slug}`}
                    className="flex items-center gap-3 group"
                >
                    <img
                        src={agent.avatar}
                        alt={agent.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />

                    <span className="font-semibold text-gray-800 group-hover:text-green-700">
                        {agent.name}
                    </span>

                    <span className="font-medium text-gray-900">›</span>
                </Link>

            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-3"></div>

            {/* EXPERIENCE + LISTINGS */}
            <div className="text-sm text-gray-600 mb-2 mt-5">

                <span className="font-medium">{agent.experience} Yrs</span> Experience

                <span className="mx-2 text-gray-300">|</span>

                <span className="font-medium">{agent.listings}</span> Listings

            </div>

            {/* LOCATIONS */}
            <div className="flex gap-2 mb-3 flex-wrap">

                {agent.locations?.map((loc) => (
                    <span
                        key={loc}
                        className="text-xs font-medium bg-gray-200 text-gray-900 px-2    py-0 rounded"
                    >
                        {loc}
                    </span>
                ))}

            </div>

            {/* CTA */}
            {showContact ? (
                <div className="w-full bg-green-50 border border-green-200 rounded-lg py-2 text-sm text-center font-medium text-green-700">
                    {agent.phone || "Contact Available"}
                </div>
            ) : (
                <button
                    onClick={handleShowContact}
                    className="w-full border border-green-400 text-green-600 rounded-lg py-1 text-sm font-medium flex items-center justify-center gap-2 hover:bg-green-100 transition"
                >
                    <Phone size={16} />
                    Show Contact
                </button>
            )}

            <LeadCaptureModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                agentId={agent.id}   // 👈 pass agentId
                onSuccess={() => {
                    setShowModal(false);
                    setShowContact(true); // ✅ unlock contact here
                }}
            />

        </div>
    );
}

export default AgentCard;