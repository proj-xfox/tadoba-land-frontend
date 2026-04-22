import useFilters from "../../hooks/useFilters";

function SafariGatesNew() {
    const { gates: selectedGates, toggleGate } = useFilters();

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
        "Madnapur",
    ];

    return (
        <div className="sticky top-[60px] md:top-16 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-2 py-3">

                {/* Horizontal scroll container */}
                <div className=" flex gap-1  overflow-x-auto no-scrollbar   ">

                    {gates.map((gate) => {
                        const formatted = gate.toLowerCase();
                        const isActive = selectedGates.includes(formatted);

                        return (
                            <button
                                key={gate}
                                onClick={() => toggleGate(formatted)}
                                className={`
                  whitespace-nowrap
                  px-4 py-2
                  text-sm font-medium
                  rounded-full border transition-all duration-200

                  ${isActive
                                        ? "bg-green-600 text-white border-green-600 shadow-sm"
                                        : "bg-green-50 border-green-200 text-green-800 hover:bg-green-100"
                                    }
                `}
                            >
                                {gate}
                            </button>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}

export default SafariGatesNew;