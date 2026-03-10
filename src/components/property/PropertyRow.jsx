import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PropertyCard from "./PropertyCard";

function PropertyRow({ title, properties }) {

    const scrollRef = useRef(null);

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const updateArrows = () => {
        const el = scrollRef.current;

        setShowLeft(el.scrollLeft > 0);

        setShowRight(
            el.scrollLeft + el.clientWidth < el.scrollWidth - 5
        );
    };

    useEffect(() => {
        updateArrows();

        const el = scrollRef.current;
        el.addEventListener("scroll", updateArrows);

        return () => el.removeEventListener("scroll", updateArrows);
    }, []);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -320,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 320,
            behavior: "smooth",
        });
    };

    return (
        <div className="mb-10 mt-10 relative">

            {/* Title */}
            <h2 className="text-xl font-semibold mb-4">
                {title}
            </h2>

            {/* LEFT ARROW */}
            {showLeft && (
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-[55%] -translate-y-1/2 z-10 bg-white/90 backdrop-blur shadow-md rounded-full p-2 hover:bg-white"
                >
                    <ChevronLeft size={20} />
                </button>
            )}

            {/* ROW */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scroll-smooth px-10 py-2"
                style={{ scrollbarWidth: "none" }}
            >
                {properties.map((property) => (
                    <div key={property.id} className="min-w-[280px] flex-shrink-0">
                        <PropertyCard property={property} />
                    </div>
                ))}
            </div>

            {/* RIGHT ARROW */}
            {showRight && (
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-[55%] -translate-y-1/2 z-10 bg-white/90 backdrop-blur shadow-md rounded-full p-2 hover:bg-white"
                >
                    <ChevronRight size={20} />
                </button>
            )}

        </div>
    );
}

export default PropertyRow;