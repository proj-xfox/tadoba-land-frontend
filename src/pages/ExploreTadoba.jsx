// src/pages/ExploreTadoba.jsx

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import tadobaSafari from "../assets/images/tadobasafari.jpg";
import safari from "../assets/images/safari.jpeg";
import tiger5 from "../assets/images/tiger5.jpg";
import tiger2 from "../assets/images/tiger2.jpg";
import tiger3 from "../assets/images/tiger3.jpg";
import deer from "../assets/images/deer.jpeg";

function ExploreTadoba() {
    return (
        <>
            <Navbar />

            {/* HERO */}
            <section className="relative h-[420px]">
                <img
                    src={deer}
                    alt="Tadoba Forest"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl font-semibold text-center px-4">
                        Explore Tadoba & Surroundings
                    </h1>
                </div>
            </section>

            {/* INTRO */}
            <section className="max-w-6xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">
                    A Region Where Wildlife, Villages and Tourism Meet
                </h2>

                <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
                    Tadoba Andhari Tiger Reserve is one of India’s most famous wildlife
                    destinations located in Maharashtra's Chandrapur district. Dense
                    forests, lakes and peaceful villages make this region not only a
                    wildlife hotspot but also a growing destination for eco tourism and
                    nature living.
                </p>
            </section>

            {/* WILDLIFE */}
            <section
                id="wildlife"
                className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center"
            >
                <img
                    src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200"
                    alt="Tiger Tadoba"
                    className="rounded-xl shadow-md transition duration-300 hover:scale-105"
                />

                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Wildlife of Tadoba
                    </h2>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Tadoba is known for its thriving population of Bengal tigers and is
                        considered one of the best tiger sighting destinations in India.
                        The forest ecosystem also supports leopards, sloth bears, wild dogs
                        and several species of deer.
                    </p>

                    <p className="text-gray-600 mt-3 leading-relaxed">
                        Over 200 species of birds inhabit the reserve along with lakes and
                        grasslands that support rich biodiversity.
                    </p>
                </div>
            </section>

            {/* SAFARI GATES */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Safari Gates of Tadoba
                        </h2>

                        <p className="text-gray-600 mt-4 leading-relaxed">
                            Tadoba has several safari entry gates including Moharli, Kolara,
                            Navegaon, Zari and Pangdi. These gates allow visitors to explore
                            different zones of the tiger reserve.
                        </p>

                        <p className="text-gray-600 mt-3 leading-relaxed">
                            Tourism infrastructure like resorts, safari lodges and eco stays
                            have developed around these gates, making nearby villages popular
                            for tourism related land investment.
                        </p>
                    </div>

                    <img
                        src="https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200"
                        alt="Tourists spotting tiger during Tadoba safari"
                        className="rounded-xl shadow-md transition duration-300 hover:scale-105"
                    />

                </div>
            </section>

            {/* VILLAGES */}
            <section
                id="villages"
                className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center"
            >
                <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200"
                    alt="Village near Tadoba"
                    className="rounded-xl shadow-md transition duration-300 hover:scale-105"
                />

                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Villages Around Tadoba
                    </h2>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Villages like Moharli, Kolara, Navegaon, Adegaon and Bhamdeli lie
                        close to the forest. These areas offer scenic farmland landscapes
                        and peaceful rural living.
                    </p>

                    <p className="text-gray-600 mt-3 leading-relaxed">
                        With tourism growing rapidly, many landowners are building farm
                        stays, eco homes and small nature resorts.
                    </p>
                </div>
            </section>

            {/* TOURISM */}
            <section id="tourism" className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Tourism & Safari Experiences
                        </h2>

                        <p className="text-gray-600 mt-4 leading-relaxed">
                            Tadoba attracts thousands of visitors every year for jungle
                            safaris, wildlife photography and nature tourism. Safari drives
                            through the forest offer a chance to see tigers and other wildlife
                            in their natural habitat.
                        </p>

                        <p className="text-gray-600 mt-3 leading-relaxed">
                            This growing tourism ecosystem is also increasing demand for eco
                            tourism properties, farm stays and nature retreats.
                        </p>
                    </div>

                    <img
                        src={tadobaSafari}
                        alt="Safari tourism"
                        className="rounded-xl shadow-md transition duration-300 hover:scale-105"
                    />
                </div>
            </section>

            {/* IMAGE GALLERY */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-10">
                    Glimpses of Tadoba
                </h2>

                <div className="grid md:grid-cols-3 gap-4">

                    <div className="md:col-span-2">
                        <img
                            src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200"
                            alt="Tiger Tadoba"
                            className="w-full h-full object-cover rounded-xl transition duration-300 hover:scale-105"
                        />
                    </div>

                    <div>
                        <img
                            src={tiger5}
                            alt="Forest road"
                            className="w-full h-full object-cover rounded-xl transition duration-300 hover:scale-105"
                        />
                    </div>

                    <div>
                        <img
                            src={tiger2}
                            alt="Village farmland"
                            className="w-full h-full object-cover rounded-xl transition duration-300 hover:scale-105"
                        />
                    </div>

                    <div>
                        <img
                            src={tiger3}
                            alt="Safari jeep"
                            className="w-full h-full object-cover rounded-xl transition duration-300 hover:scale-105"
                        />
                    </div>

                    <div>
                        <img
                            src={safari}
                            alt="Forest lake"
                            className="w-full h-full object-cover rounded-xl transition duration-300 hover:scale-105"
                        />
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="max-w-6xl mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Explore Land Opportunities Near Tadoba
                </h2>

                <p className="text-gray-600 mt-4">
                    Browse available land listings around Tadoba and nearby villages.
                </p>

                <Link
                    to="/"
                    className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
                >
                    Browse Land Listings
                </Link>
            </section>

            <Footer />
        </>
    );
}

export default ExploreTadoba;