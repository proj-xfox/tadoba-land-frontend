// src/components/layout/Footer.jsx

function Footer() {
    return (
        <footer className="bg-gray-100 mt-10">
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
                        <li>About</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>

            </div>

            <div className="text-center text-gray-500 text-sm pb-6 space-y-1">

                <div>
                    © {new Date().getFullYear()} TadobaLand. All rights reserved.
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