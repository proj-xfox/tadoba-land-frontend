// src/components/agents/AgentCard.jsx

import { Link } from "react-router-dom";

function AgentCard({ agent }) {
    return (
        <div className="min-w-[260px] bg-green-50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 border border-green-100 hover:-translate-y-1">

            <div className="flex items-center gap-3 mb-3">

                <img
                    src={agent.avatar}
                    alt={agent.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                />

                <div>
                    <p className="font-semibold text-gray-800">
                        {agent.name}
                    </p>

                    <p className="text-sm text-gray-600">
                        {agent.location}
                    </p>
                </div>

            </div>

            <div className="flex justify-between items-center mb-3">

                <div>
                    <p className="text-lg font-semibold text-gray-800">
                        {agent.listings}
                    </p>
                    <p className="text-xs text-gray-500">
                        Listings
                    </p>
                </div>

                <span className="text-xs font-semibold bg-green-200 text-green-800 px-2 py-1 rounded">
                    Verified
                </span>

            </div>

            <Link
                to={`/agent/${agent.slug}`}
                className="block text-center text-green-700 text-sm font-medium border border-green-300 rounded-lg py-2 hover:bg-green-100 transition"
            >
                View Listings →
            </Link>

        </div>
    );
}

export default AgentCard;