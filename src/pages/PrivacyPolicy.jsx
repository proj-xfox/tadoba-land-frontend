// src/pages/About.jsx
import Footer from "../components/layout/Footer";

function PrivacyPolicy() {
    return (
        <>
            <div className="max-w-5xl mx-auto px-4 py-12">

                <h1 className="text-3xl font-bold mb-6">
                    Privacy Policy
                </h1>

                <p className="text-gray-700 mb-4">
                    This Privacy Policy explains how TadobaLand collects,
                    uses, and protects information provided by users of the
                    platform.
                </p>

                <p className="text-gray-700 mb-4">
                    TadobaLand operates an online marketplace connecting
                    land owners, agents, and investors interested in land
                    opportunities around the Tadoba region.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    1. Information We Collect
                </h2>

                <p className="text-gray-700 mb-4">
                    When users register or interact with the platform, we may
                    collect basic information such as name, email address,
                    phone number, and property details submitted for listing.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    2. Automatically Collected Information
                </h2>

                <p className="text-gray-700 mb-4">
                    We may automatically collect certain information such as
                    IP address, device type, browser type, and pages visited
                    to improve the website experience.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    3. Use of Cookies
                </h2>

                <p className="text-gray-700 mb-4">
                    TadobaLand may use cookies or similar technologies to
                    improve website functionality and analyze visitor
                    behavior.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    4. How We Use Information
                </h2>

                <p className="text-gray-700 mb-4">
                    Information collected may be used to provide services,
                    connect buyers with property owners, improve platform
                    features, and communicate updates related to the service.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    5. Third Party Links
                </h2>

                <p className="text-gray-700 mb-4">
                    Our platform may contain links to third-party websites.
                    TadobaLand is not responsible for the privacy practices
                    of those external sites.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    6. Policy Updates
                </h2>

                <p className="text-gray-700">
                    This Privacy Policy may be updated from time to time.
                    Continued use of the platform after updates indicates
                    acceptance of the revised policy.
                </p>

            </div>

            <Footer />
        </>
    );
}

export default PrivacyPolicy;