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
        "Madnapur"
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 pt-10">

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
                            onClick={() => toggleGate(gate)}
                            className={`px-4 py-1 rounded-full border transition
                                ${isActive
                                    ? "bg-green-600 text-white border-green-600 shadow-md"
                                    : "bg-green-50 border-green-200 text-green-800 hover:bg-green-100"
                                }`}
                        >
                            {gate} Gate
                        </button>
                    );
                })}

            </div>

        </section>
    );
}

export default SafariGatesNew;