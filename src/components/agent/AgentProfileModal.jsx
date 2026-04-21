//src/components/agent/AgentProfileModal.jsx
import { useState } from "react";
import { toast } from "react-hot-toast";

function AgentProfileModal({ isOpen, onClose, onSave }) {

    console.log("MODAL RENDERED==============");

    if (!isOpen) return null;

    const [form, setForm] = useState({
        bio: "",
        experience: "",
        areas: []
    });

    const toggleGate = (gate) => {
        setForm(prev => ({
            ...prev,
            areas: prev.areas.includes(gate)
                ? prev.areas.filter(g => g !== gate)
                : [...prev.areas, gate]
        }));
    };

    const handleSubmit = () => {
        if (!form.areas.length) {
            toast.error("Select at least one area");
            return;
        }

        if (!form.experience) {
            toast.error("Add experience");
            return;
        }

        onSave(form);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white p-6 rounded-lg w-full max-w-md relative">


                <button onClick={onClose} className="absolute top-2 right-2">
                    ✕
                </button>

                <h2 className="text-xl font-semibold">
                    Get More Buyer Calls 📞
                </h2>

                <p className="text-sm text-gray-500">
                    Complete your profile to appear as a trusted agent
                </p>

                <div className="mt-5">
                    <label className="text-sm font-medium">
                        Where do you work? <span className="text-gray-400">(Select all)</span>
                    </label>

                    <div className="flex flex-wrap gap-2 mt-2">
                        {["MOHARLI", "KOLARA", "ZARI"].map(gate => {
                            const active = form.areas.includes(gate);

                            return (
                                <button
                                    key={gate}
                                    onClick={() => toggleGate(gate)}
                                    className={`px-3 py-1 rounded-full text-sm border transition
                        ${active
                                            ? "bg-green-700 text-white border-green-700"
                                            : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                                        }`}
                                >
                                    {gate}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-5">
                    <label className="text-sm font-medium">
                        Years of Experience
                    </label>

                    <div className="flex gap-2 mt-2 flex-wrap">
                        {["0-1", "1-3", "3-5", "5+"].map(exp => (
                            <button
                                key={exp}
                                onClick={() => setForm({ ...form, experience: exp })}
                                className={`px-3 py-1 rounded-full text-sm border transition
                    ${form.experience === exp
                                        ? "bg-green-700 text-white border-green-700"
                                        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                                    }`}
                            >
                                {exp} yrs
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-5">
                    <label className="text-sm font-medium">
                        About You
                    </label>

                    <textarea
                        className="w-full mt-2 border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                        rows={3}
                        placeholder="Eg: Helping buyers find best land near Tadoba for 5+ years..."
                        value={form.bio}
                        onChange={e => setForm({ ...form, bio: e.target.value })}
                    />
                </div>

                <button onClick={handleSubmit}>
                    Save Profile
                </button>

            </div>
        </div>
    );
}

export default AgentProfileModal;