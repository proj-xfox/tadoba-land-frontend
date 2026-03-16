import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";
import InsightList from "../components/insight/InsightList";

function Insights() {

    const articles = [
        {
            id: 1,
            slug: "buying-land-near-tadoba-checklist",
            title: "Can you buy land just by seeing the sample plot?",
            description:
                "Before buying land near Tadoba, know what to check to avoid costly surprises later.",
            author: "TadobaLand Editorial",
            date: "Oct 2025",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef"
        },
        {
            id: 2,
            slug: "eco-resort-demand-tadoba",
            title: "Why Eco resort land demand is rising near Tadoba",
            description:
                "Eco tourism investment is driving demand for large land parcels around the reserve.",
            author: "TadobaLand Editorial",
            date: "Jul 2025",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
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
        <>
            <Navbar />

            {/* HERO SECTION */}
            <section
                className="w-full h-[320px] bg-cover bg-center flex items-center justify-center relative"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee)"
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative text-center text-white px-4">
                    <h1 className="text-4xl font-bold mb-2">
                        Land Insights
                    </h1>
                    <p className="text-lg">
                        Market trends, investment ideas and land buying guides around Tadoba
                    </p>
                </div>
            </section>

            {/* ARTICLES + SIDEBAR */}
            <div className="max-w-7xl mx-auto px-20 py-14">

                <div className="grid grid-cols-12 gap-10">

                    {/* LEFT SIDE - ARTICLES */}
                    <InsightList articles={articles} />

                    {/* RIGHT SIDE - QUICK LINKS */}
                    <div className="col-span-12 lg:col-span-4">

                        <div className="bg-gray-50 p-6 rounded-lg border">

                            <h3 className="text-lg font-semibold mb-4">
                                Popular Land Searches
                            </h3>

                            <ul className="space-y-3 text-sm">

                                <li>
                                    <Link to="/search?location=moharli" className="text-purple-600 hover:underline">
                                        Land near Moharli Gate
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/search?location=kolara" className="text-purple-600 hover:underline">
                                        Land near Kolara Gate
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/search?location=adegaon" className="text-purple-600 hover:underline">
                                        Land in Adegaon village
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/search?location=chimur" className="text-purple-600 hover:underline">
                                        Land near Chimur Road
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/search?location=tadoba" className="text-purple-600 hover:underline">
                                        Eco resort land near Tadoba
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/search?location=tiger-reserve" className="text-purple-600 hover:underline">
                                        Land near Tadoba Tiger Reserve
                                    </Link>
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Insights;