import { useRef } from "react";
import DealCard from "./DealCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

function PropertyCarousel({ title, properties }) {
    const scrollRef = useRef(null);

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
        <div className="relative mt-1 max-w-7xl mx-auto px-4 pt-10 pb-6">

            <h2 className="text-xl font-semibold mb-4">
                {title}
            </h2>
            {/* LEFT ARROW */}
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hover:bg-gray-100"
            >
                <ChevronLeft size={20} />
            </button>


            {/* CAROUSEL */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scroll-smooth px-10"
                style={{ scrollbarWidth: "none" }}
            >
                {properties.map((property) => (
                    <DealCard key={property.id} property={property} />
                ))}
            </div>

            {/* RIGHT ARROW */}
            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hover:bg-gray-100"
            >
                <ChevronRight size={20} />
            </button>


        </div>
    );
}

export default PropertyCarousel;