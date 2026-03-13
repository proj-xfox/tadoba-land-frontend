// src/components/layout/Footer.jsx
function Footer() {
    return (
        <footer className="bg-gray-100 mt-1">
            <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">

                <div>
                    <h2 className="text-xl font-bold text-green-700">TadobaLand</h2>
                    <p className="text-gray-600 mt-2">
                        Marketplace for land and resort investment opportunities near
                        Tadoba Tiger Reserve.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="text-gray-600 space-y-1">
                        <li>Browse Land</li>
                        <li>List Your Land</li>
                        <li>How It Works</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Information</h3>

                    <ul className="text-gray-600 space-y-1">

                        <li>
                            <a
                                href="/about"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-700 transition"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="/privacy-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-700 transition"
                            >
                                Privacy Policy
                            </a>
                        </li>

                        <li>
                            <a
                                href="/terms-of-use"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-700 transition"
                            >
                                Terms of Use
                            </a>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm pb-6 space-y-1">

                <div>
                    © {new Date().getFullYear()} TadobaLand. All rights reserved.
                    <p className="mt-2">
                        TadobaLand is an independent marketplace connecting land owners,
                        agents, and investors. We do not verify legal ownership of properties.
                    </p>
                </div>

                <div>
                    Technology Partner:{" "}
                    <a
                        href="https://vedaxon.com"
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-green-700 hover:underline"
                    >
                        Vedaxon
                    </a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;