import { Link } from "react-router-dom";

function LifeAroundTadoba() {

    const sections = [
        {
            title: "Wildlife of Tadoba",
            description:
                "Tadoba is home to Bengal tigers, leopards, sloth bears, deer and over 200 bird species. The forest ecosystem makes this region one of India's most exciting wildlife destinations.",
            image:
                "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200",
            link: "/explore-tadoba#wildlife",
        },
        {
            title: "Life Around the Forest",
            description:
                "Villages around Tadoba offer peaceful rural life surrounded by nature. Many landowners are developing farm stays, eco homes and tourism properties.",
            image:
                "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200",
            link: "/explore-tadoba#villages",
        },
        {
            title: "Safari & Tourism",
            description:
                "Thousands of tourists visit Tadoba every year for jungle safari experiences. Growing tourism is creating opportunities for land investment and eco tourism projects.",
            image:
                "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1200",
            link: "/explore-tadoba#tourism",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">

            {/* Section Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-gray-800">
                    Discover Life Around Tadoba
                </h2>

                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                    Tadoba is more than just a forest. It is a growing destination for
                    wildlife tourism, eco living and land investment opportunities.
                </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8">

                {sections.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
                    >
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-48 w-full object-cover"
                        />

                        {/* Content */}
                        <div className="p-6">

                            <h3 className="text-lg font-semibold text-gray-800">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                                {item.description}
                            </p>

                            <Link
                                to={item.link}
                                className="inline-block mt-4 text-green-700 font-medium hover:text-green-800"
                            >
                                Learn More →
                            </Link>

                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}

export default LifeAroundTadoba;