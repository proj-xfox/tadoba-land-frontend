// src/pages/TermsOfUse.jsx
import Footer from "../components/layout/Footer";

function TermsOfUse() {
    return (
        <>
            <div className="max-w-5xl mx-auto px-4 py-12">

                <h1 className="text-3xl font-bold mb-6">
                    Terms of Use
                </h1>

                <p className="text-gray-700 mb-4">
                    These Terms of Use govern your use of the TadobaLand
                    website and services. By using the platform, you agree
                    to comply with these terms.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    1. Platform Role
                </h2>

                <p className="text-gray-700 mb-4">
                    TadobaLand operates as an online marketplace connecting
                    land owners, agents, and investors interested in land
                    opportunities around the Tadoba region.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    2. User Responsibility
                </h2>

                <p className="text-gray-700 mb-4">
                    Users listing properties confirm that they have the legal
                    authority to list the property and that the information
                    provided is accurate to the best of their knowledge.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    3. Property Listing Disclaimer
                </h2>

                <p className="text-gray-700 mb-4">
                    TadobaLand does not verify the legal ownership, title,
                    authenticity, or accuracy of any property listed on the
                    platform. All property details including land area,
                    pricing, and ownership information are provided by the
                    listing user.
                </p>

                <p className="text-gray-700 mb-4">
                    Users are advised to perform their own independent
                    verification and legal due diligence before entering
                    into any property transaction.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    4. Platform Liability
                </h2>

                <p className="text-gray-700 mb-4">
                    TadobaLand shall not be responsible for any disputes,
                    losses, legal claims, or damages arising from property
                    transactions conducted between users.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    5. Policy Changes
                </h2>

                <p className="text-gray-700">
                    TadobaLand reserves the right to modify these terms
                    at any time. Continued use of the platform after
                    changes indicates acceptance of the updated terms.
                </p>

            </div>

            <Footer />
        </>
    );
}

export default TermsOfUse;