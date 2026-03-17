// src/components/home/SellPropertyCTA.jsx

import { Link } from "react-router-dom";
import ctabg from "../../assets/images/cta-bg.png";

function SellPropertyCTA() {
    return (
        <section className="bg-white py-5 ">
            <div className="max-w-7xl mx-20 px-4">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Have land near Tadoba?
                </h2>

                {/* CTA Container */}
                <div
                    className="relative overflow-hidden rounded-xl border border-gray-200 px-10 py-16 text-center text-white"
                    style={{
                        backgroundImage: `url(${ctabg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >

                    {/* Overlay for readability */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-2xl mx-auto">

                        <p className="text-lg mb-4">
                            List your farm or resort land and connect directly with
                            genuine buyers visiting Tadoba.
                        </p>

                        <p className="text-sm mb-6 opacity-90">
                            ✓ Free listing &nbsp; • &nbsp;
                            ✓ Direct buyer enquiries &nbsp; • &nbsp;
                            ✓ Farm & resort land near Tadoba
                        </p>

                        <Link
                            to="/post-property"
                            className="text-3xl font-bold border border-white text-white-500 px-20 py-2 rounded-md text-sm hover:bg-green-500">
                            List your land
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default SellPropertyCTA;