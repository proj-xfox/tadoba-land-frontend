import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";

function PropertyRow({ title, properties, seeAllLink }) {

    const scrollRef = useRef(null);

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const isLoading = !properties || properties.length === 0; // ✅ NEW

    const updateArrows = () => {
        const el = scrollRef.current;
        if (!el) return;

        setShowLeft(el.scrollLeft > 0);

        setShowRight(
            el.scrollLeft + el.clientWidth < el.scrollWidth - 5
        );
    };

    useEffect(() => {
        updateArrows();

        const el = scrollRef.current;
        el?.addEventListener("scroll", updateArrows);

        return () => el?.removeEventListener("scroll", updateArrows);
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const observer = new ResizeObserver(() => {
            updateArrows();
        });

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const timeout = setTimeout(() => {
            updateArrows();
        }, 100);

        return () => clearTimeout(timeout);
    }, [properties]);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({
            left: -320,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({
            left: 320,
            behavior: "smooth",
        });
    };

    return (
        <div className="mb-10 relative">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-4">

                <h2 className="text-xl font-semibold">
                    {title}
                </h2>

                {seeAllLink && (
                    <Link
                        to={seeAllLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-700 text-sm font-medium hover:text-green-800"
                    >
                        See all properties →
                    </Link>
                )}

            </div>

            {/* LEFT ARROW */}
            {showLeft && !isLoading && (
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-[60%] -translate-y-1/2 z-10 bg-white/90 backdrop-blur shadow-md rounded-full p-2 hover:bg-white"
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

                {isLoading
                    ? [...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="min-w-[280px] flex-shrink-0 animate-pulse"
                        >
                            <div className="bg-white rounded-lg shadow p-3 space-y-3">
                                <div className="h-40 bg-gray-200 rounded" />
                                <div className="h-4 bg-gray-200 rounded w-3/4" />
                                <div className="h-4 bg-gray-200 rounded w-1/2" />
                                <div className="h-4 bg-gray-200 rounded w-1/3" />
                            </div>
                        </div>
                    ))
                    : properties.map((property) => (
                        <div
                            key={property.id}
                            className="min-w-[280px] flex-shrink-0"
                        >
                            <PropertyCard property={property} />
                        </div>
                    ))
                }

            </div>

            {/* RIGHT ARROW */}
            {showRight && !isLoading && (
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-[60%] -translate-y-1/2 z-10 bg-white/90 backdrop-blur shadow-md rounded-full p-2 hover:bg-white"
                >
                    <ChevronRight size={20} />
                </button>
            )}

        </div>
    );
}

export default PropertyRow;