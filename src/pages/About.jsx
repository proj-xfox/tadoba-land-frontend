// src/pages/About.jsx
import Footer from "../components/layout/Footer";

function About() {
    return (
        <>
            <div className="max-w-5xl mx-auto px-4 py-12">

                <h1 className="text-3xl font-bold mb-6">
                    About TadobaLand
                </h1>

                <p className="text-gray-700 mb-4">
                    TadobaLand is a niche land marketplace focused on land
                    investment opportunities around the Tadoba Tiger Reserve
                    region in Maharashtra.
                </p>

                <p className="text-gray-700 mb-4">
                    The platform connects land owners, agents, and investors
                    looking for agricultural land, resort development land,
                    and tourism investment opportunities near Tadoba.
                </p>

                <p className="text-gray-700 mb-4">
                    Our mission is to make land discovery simpler by bringing
                    local listings and investment opportunities into a single
                    transparent marketplace.
                </p>

                <p className="text-gray-700">
                    TadobaLand acts only as a technology platform that
                    connects buyers and sellers. Property verification
                    and legal due diligence remain the responsibility
                    of the users.
                </p>

            </div>

            <Footer />
        </>
    );
}

export default About;