//src/components/home/LandInsights.jsx
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

function LandInsights() {

    const scrollRef = useRef();

    const scroll = (direction) => {
        const { current } = scrollRef;
        const scrollAmount = 380;

        if (direction === "left") {
            current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const articles = [
        {
            id: 1, slug: "best-villages-buy-land-near-tadoba",
            title: "Can you buy land just by seeing the sample plot?",
            description:
                "Before buying land near Tadoba, know what to check to avoid costly surprises later.",
            author: "TadobaLand Editorial",
            date: "Oct 2025",
            image:
                "https://images.unsplash.com/photo-1500382017468-9049fed747ef"
        },
        {
            id: 2, slug: "best-villages-buy-land-near-tadoba",
            title: "Why Eco resort land demand is rising near Tadoba",
            description:
                "Eco tourism investment is driving demand for large land parcels around the reserve.",
            author: "TadobaLand Editorial",
            date: "Jul 2025",
            image:
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
        },
        {
            id: 3, slug: "best-villages-buy-land-near-tadoba",
            title: "Why investors are buying land near wildlife zones",
            description:
                "Tourism growth and eco resorts are pushing land demand in forest-edge villages.",
            author: "TadobaLand Editorial",
            date: "Jun 2025",
            image:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        },
        {
            id: 4, slug: "best-villages-buy-land-near-tadoba",
            title: "Best Villages to Buy Land Near Tadoba National Park",
            description:
                "Explore Moharli, Kolara and Adegaon where land interest is increasing.",
            author: "TadobaLand Editorial",
            date: "May 2025",
            image:
                "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
        }
    ];

    return (
        <section className="bg-white py-5">

            <div className="max-w-7xl mx-20 px-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-8">

                    <div>
                        <h2 className="text-3xl font-bold">
                            Land Insights & News
                        </h2>
                        <p className="text-gray-600">
                            Read what's happening around Tadoba land market
                        </p>
                    </div>

                    <Link
                        to="/insights"
                        className="border border-green-500 text-green-500 px-4 py-2 rounded-md text-sm hover:bg-green-100">
                        See all Land insights & news →
                    </Link>
                </div>

                {/* Carousel */}
                <div className="relative">

                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
                    >
                        <ChevronLeft size={22} />
                    </button>

                    {/* Scroll Row */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
                    >
                        {articles.map(article => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
                    >
                        <ChevronRight size={22} />
                    </button>

                </div>

            </div>

        </section >
    );
}

export default LandInsights;