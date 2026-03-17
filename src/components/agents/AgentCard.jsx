// src/components/agents/AgentCard.jsx

import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

function AgentCard({ agent }) {
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
            <button className="w-full border border-green-400 text-green-600 rounded-lg py-1 text-sm font-medium flex items-center justify-center gap-2 hover:bg-green-100 transition">

                <Phone size={16} />

                Show Contact

            </button>

        </div>
    );
}

export default AgentCard;