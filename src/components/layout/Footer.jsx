// src/components/layout/Footer.jsx

import { Youtube, Instagram, Linkedin } from "lucide-react";



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


                    <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">
                            Follow TadobaLand
                        </p>

                        <div className="flex gap-4 items-center">

                            {/* YOUTUBE */}
                            <a
                                href="https://youtube.com/@yourchannel"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
                                    alt="YouTube"
                                    className="w-5 h-5 hover:scale-110 transition"
                                    style={{ filter: "invert(15%) sepia(100%) saturate(6000%) hue-rotate(0deg)" }}
                                />
                            </a>

                            {/* INSTAGRAM */}
                            <a
                                href="https://instagram.com/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                                    alt="Instagram"
                                    className="w-5 h-5 hover:scale-110 transition"
                                    style={{ filter: "invert(35%) sepia(90%) saturate(2000%) hue-rotate(280deg)" }}
                                />
                            </a>

                            {/* LINKEDIN */}
                            <a
                                href="https://linkedin.com/company/yourcompany"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                                    alt="LinkedIn"
                                    className="w-5 h-5 hover:scale-110 transition"
                                    style={{ filter: "invert(30%) sepia(90%) saturate(2000%) hue-rotate(200deg)" }}
                                />
                            </a>

                        </div>
                    </div>
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