import { useNavigate, useSearchParams } from "react-router-dom";

function SafariGates() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const selectedGates = searchParams.get("gates")
        ? searchParams.get("gates").split(",")
        : [];

    const gates = [
        "Moharli",
        "Kolara",
        "Navegaon",
        "Zari",
        "Junona",
        "Devada",
        "Agarzari",
        "Pangdi",
        "Keslaghat",
        "Alizanza",
        "Madnapur"
    ];

    const handleGateClick = (gate) => {
        const formatted = gate.toLowerCase();

        let updatedGates;

        if (selectedGates.includes(formatted)) {
            updatedGates = selectedGates.filter(g => g !== formatted);
        } else {
            updatedGates = [...selectedGates, formatted];
        }

        if (updatedGates.length === 0) {
            navigate("/");
        } else {
            navigate(`/?gates=${updatedGates.join(",")}`);
        }
    };

    return (
        <div className="sticky top-[64px] z-40 bg-white border-b">

            {/* MOBILE: horizontal scroll */}
            <div className="md:hidden px-4 py-2 overflow-x-auto no-scrollbar">
                <div className="flex gap-2">

                    {gates.map((gate) => {
                        const formatted = gate.toLowerCase();
                        const isActive = selectedGates.includes(formatted);

                        return (
                            <button
                                key={gate}
                                onClick={() => handleGateClick(gate)}
                                className={`
                  whitespace-nowrap
                  px-3 py-1.5
                  text-sm
                  rounded-full border

                  ${isActive
                                        ? "bg-green-600 text-white border-green-600"
                                        : "bg-gray-100 border-gray-200 text-gray-700"
                                    }
                `}
                            >
                                {gate}
                            </button>
                        );
                    })}

                </div>
            </div>

            {/* DESKTOP: keep your current layout */}
            <div className="hidden md:block max-w-7xl mx-auto px-4 py-6">

                <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
                    Explore Land Near Tadoba Safari Gates
                </h2>

                <div className="flex flex-wrap justify-center gap-3">
                    {gates.map((gate) => {
                        const formatted = gate.toLowerCase();
                        const isActive = selectedGates.includes(formatted);

                        return (
                            <button
                                key={gate}
                                onClick={() => handleGateClick(gate)}
                                className={`px-4 py-1 rounded-full border transition
                  ${isActive
                                        ? "bg-green-600 text-white border-green-600 shadow-md"
                                        : "bg-green-50 border-green-200 text-green-800 hover:bg-green-100"
                                    }
                `}
                            >
                                {gate} Gate
                            </button>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}

export default SafariGates;