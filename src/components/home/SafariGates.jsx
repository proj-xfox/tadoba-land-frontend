import { useNavigate } from "react-router-dom";

function SafariGates() {

    const navigate = useNavigate();

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
        navigate(`/?search=${gate.toLowerCase()}`);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 pt-10">

            <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
                Explore Land Near Tadoba Safari Gates
            </h2>

            <div className="flex flex-wrap justify-center gap-3">

                {gates.map((gate) => (
                    <button
                        key={gate}
                        onClick={() => handleGateClick(gate)}
                        className="px-4 py-2 bg-green-50 border border-green-200 text-green-800 rounded-full hover:bg-green-100 transition"
                    >
                        {gate} Gate
                    </button>
                ))}

            </div>

        </section>
    );
}

export default SafariGates;