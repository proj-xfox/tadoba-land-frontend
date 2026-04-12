import { useSearchParams, useNavigate } from "react-router-dom";

export default function useFilters() {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // 🔹 Read gates
    const gates = searchParams.get("gates")
        ? searchParams.get("gates").split(",")
        : [];

    // 🔹 Toggle gate
    const toggleGate = (gate) => {
        const formatted = gate.toLowerCase();

        let updated;

        if (gates.includes(formatted)) {
            updated = gates.filter(g => g !== formatted);
        } else {
            updated = [...gates, formatted];
        }

        if (updated.length === 0) {
            navigate(window.location.pathname);
        } else {
            navigate(`?gates=${updated.join(",")}`);
        }
    };

    // 🔹 Clear filters
    const clearFilters = () => {
        navigate(window.location.pathname);
    };

    return {
        gates,
        toggleGate,
        clearFilters
    };
}