import { useEffect, useState } from "react";
import { getLeadsApi } from "../api/leadApi";
import Navbar from "../components/layout/Navbar";

function Dashboard() {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const res = await getLeadsApi();

                // ✅ Sorted latest first
                const sortedLeads = (res?.data || []).sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                );

                setLeads(sortedLeads);

                // 🔔 Notify navbar
                window.dispatchEvent(new Event("leadsUpdated"));

            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchLeads();
    }, []);

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-50 pt-20 px-3 sm:px-4">
                <div className="max-w-6xl mx-auto">

                    {/* HEADER */}
                    <div className="mb-5">
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                            Dashboard
                        </h1>
                        <p className="text-gray-600 text-xs sm:text-sm">
                            Manage your leads and track customer interest
                        </p>
                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">

                        <div className="bg-white rounded-xl shadow-sm p-3 sm:p-4 border">
                            <p className="text-xs text-gray-500">Total Leads</p>
                            <p className="text-lg sm:text-xl font-bold text-gray-800">
                                {leads.length}
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-3 sm:p-4 border">
                            <p className="text-xs text-gray-500">New Leads</p>
                            <p className="text-lg sm:text-xl font-bold text-green-600">
                                {leads.filter(l => !l.isViewed).length}
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-3 sm:p-4 border col-span-2 md:col-span-1">
                            <p className="text-xs text-gray-500">Seen Leads</p>
                            <p className="text-lg sm:text-xl font-bold text-gray-800">
                                {leads.filter(l => l.isViewed).length}
                            </p>
                        </div>

                    </div>

                    {/* LEADS LIST */}
                    <div className="bg-white rounded-xl shadow-sm border">

                        <div className="p-3 sm:p-4 border-b">
                            <h2 className="font-semibold text-gray-800 text-sm sm:text-base">
                                Recent Leads
                            </h2>
                        </div>

                        {loading ? (
                            <p className="p-4 text-gray-500 text-sm">Loading...</p>
                        ) : leads.length === 0 ? (
                            <p className="p-4 text-gray-500 text-sm">
                                No leads yet. Start getting visibility!
                            </p>
                        ) : (
                            <div className="divide-y">

                                {leads.map((lead) => (
                                    <div
                                        key={lead.id}
                                        className={`p-3 sm:p-4 hover:bg-gray-50 border-l-4 ${!lead.isViewed
                                                ? "bg-green-50 border-green-500"
                                                : "border-transparent"
                                            }`}
                                    >

                                        {/* TOP */}
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <p className="font-medium text-gray-800 text-sm sm:text-base">
                                                    {lead.buyer?.name || "Unknown Buyer"}
                                                </p>

                                                <p className="text-xs text-gray-400 mt-1">
                                                    {lead.property
                                                        ? `Interested in: ${lead.property.title}`
                                                        : "General enquiry"}
                                                </p>
                                            </div>

                                            {!lead.isViewed && (
                                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                                    New
                                                </span>
                                            )}
                                        </div>

                                        {/* ACTIONS */}
                                        <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">

                                            {/* CALL */}
                                            <a
                                                href={`tel:${lead.buyer?.phone}`}
                                                className="w-full sm:w-auto text-center bg-blue-600 text-white text-xs sm:text-sm py-2 px-3 rounded-lg"
                                            >
                                                📞 Call {lead.buyer?.phone}
                                            </a>

                                            {/* WHATSAPP */}
                                            <a
                                                href={`https://wa.me/91${lead.buyer?.phone}`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-full sm:w-auto text-center bg-green-600 text-white text-xs sm:text-sm py-2 px-3 rounded-lg"
                                            >
                                                💬 WhatsApp
                                            </a>

                                        </div>

                                        {/* FOOTER */}
                                        <div className="mt-2 text-right">
                                            <p className="text-xs text-gray-400">
                                                {new Date(lead.createdAt).toLocaleString("en-IN", {
                                                    dateStyle: "medium",
                                                    timeStyle: "short"
                                                })}
                                            </p>
                                        </div>

                                    </div>
                                ))}

                            </div>
                        )}

                    </div>

                </div>
            </div>
        </>
    );
}

export default Dashboard;