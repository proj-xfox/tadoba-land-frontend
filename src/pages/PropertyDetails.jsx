import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyCarousel from "../components/property/SimilarPropertyCarousel";

function PropertyDetails() {

    const { id } = useParams();

    const properties = [
        {
            id: 1,
            title: "5 Acre Resort Land",
            village: "Moharli",
            price: "₹25,00,000",
            area: "5 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
            listedBy: "owner"
        },
        {
            id: 2,
            title: "3 Acre Farm Land",
            village: "Kolara",
            price: "₹15,00,000",
            area: "3 Acres",
            type: "Lease",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            listedBy: "agent"
        },
        {
            id: 3,
            title: "10 Acre Eco Resort Land",
            village: "Chimur",
            price: "₹60,00,000",
            area: "10 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
            listedBy: "owner"
        },
        {
            id: 4,
            title: "7 Acre Jungle Edge Land",
            village: "Kolara",
            price: "₹40,00,000",
            area: "7 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
            listedBy: "agent"
        },
        {
            id: 5,
            title: "5 Acre Resort Land",
            village: "Moharli",
            price: "₹25,00,000",
            area: "5 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
            listedBy: "owner"
        },
        {
            id: 6,
            title: "3 Acre Farm Land",
            village: "Kolara",
            price: "₹15,00,000",
            area: "3 Acres",
            type: "Lease",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            listedBy: "agent"
        },
        {
            id: 7,
            title: "10 Acre Eco Resort Land",
            village: "Chimur",
            price: "₹60,00,000",
            area: "10 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
            listedBy: "owner"
        },
        {
            id: 8,
            title: "7 Acre Jungle Edge Land",
            village: "Kolara",
            price: "₹40,00,000",
            area: "7 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
            listedBy: "agent"
        },
        {
            id: 9,
            title: "10 Acre Eco Resort Land",
            village: "Chimur",
            price: "₹60,00,000",
            area: "10 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
            listedBy: "owner"
        },
        {
            id: 10,
            title: "10 Acre Eco Resort Land",
            village: "Chimur",
            price: "₹60,00,000",
            area: "10 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
            listedBy: "owner"
        },
        {
            id: 11,
            title: "10 Acre Eco Resort Land",
            village: "Chimur",
            price: "₹60,00,000",
            area: "10 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
            listedBy: "owner"
        },
        {
            id: 12,
            title: "7 Acre Jungle Edge Land",
            village: "Kolara",
            price: "₹40,00,000",
            area: "7 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
            listedBy: "agent"
        },
        {
            id: 13,
            title: "7 Acre Jungle Edge Land",
            village: "Kolara",
            price: "₹40,00,000",
            area: "7 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
            listedBy: "agent"
        },
        {
            id: 14,
            title: "7 Acre Jungle Edge Land",
            village: "Kolara",
            price: "₹40,00,000",
            area: "7 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
            listedBy: "agent"
        },
        {
            id: 15,
            title: "7 Acre Jungle Edge Land",
            village: "Kolara",
            price: "₹40,00,000",
            area: "7 Acres",
            type: "Sale",
            image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
            listedBy: "agent"
        }


    ];

    const property = {
        title: "1 Acre Land near Kolara Gate",
        price: "₹12,00,000",
        village: "Kolara",
        distance: "5 km from Tadoba Gate",
        area: "1 Acre",
        description:
            "This land parcel is located close to Kolara gate of Tadoba Tiger Reserve. Ideal for resort or tourism investment.",

        images: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        ],
    };

    return (
        <>
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 mt-10 py-10">

                {/* MAIN GRID */}
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* LEFT PANEL */}
                    <div className="lg:col-span-2">

                        {/* IMAGE */}
                        <img
                            src={property.images[0]}
                            className="w-full h-96 object-cover rounded-lg"
                            alt=""
                        />

                        {/* THUMBNAILS */}
                        <div className="grid grid-cols-3 gap-2 mt-3">
                            {property.images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    className="h-24 w-full object-cover rounded"
                                />
                            ))}
                        </div>

                        {/* INVESTMENT SNAPSHOT */}
                        <div className="mt-4 border rounded-lg p-6 bg-green-50">

                            <h2 className="text-xl font-semibold mb-4">
                                Investment Snapshot
                            </h2>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">

                                <div>
                                    <p className="text-gray-500">Tourism Potential</p>
                                    <p className="font-semibold">High</p>
                                </div>

                                <div>
                                    <p className="text-gray-500">Resort Potential</p>
                                    <p className="font-semibold">Good</p>
                                </div>

                                <div>
                                    <p className="text-gray-500">Road Connectivity</p>
                                    <p className="font-semibold">Direct Road</p>
                                </div>

                                <div>
                                    <p className="text-gray-500">Nearby Resorts</p>
                                    <p className="font-semibold">4 within 3 km</p>
                                </div>

                            </div>

                        </div>


                        {/* LAND DETAILS */}
                        <div className="mt-4 border rounded-lg p-6 shadow-sm">

                            <h2 className="text-xl font-semibold mb-4">
                                Land Details
                            </h2>

                            <div className="grid grid-cols-2 md:grid-cols-2 gap-y-3 text-gray-700">

                                <div className="flex justify-between border-b pb-2">
                                    <span className="text-gray-500">Land Type</span>
                                    <span className="font-medium">Agricultural</span>
                                </div>

                                <div className="flex justify-between border-b pb-2">
                                    <span className="text-gray-500">Ownership</span>
                                    <span className="font-medium">Clear Title</span>
                                </div>

                                <div className="flex justify-between border-b pb-2">
                                    <span className="text-gray-500">Road Access</span>
                                    <span className="font-medium">Yes</span>
                                </div>

                                <div className="flex justify-between border-b pb-2">
                                    <span className="text-gray-500">Electricity</span>
                                    <span className="font-medium">Nearby</span>
                                </div>

                            </div>

                        </div>

                        {/* DESCRIPTION */}
                        <div className="mt-4 border rounded-lg p-6 shadow-sm">

                            <h2 className="text-xl font-semibold mb-4">
                                Description
                            </h2>

                            <p className="text-gray-700 leading-relaxed">
                                {property.description}
                            </p>

                        </div>

                        {/* LOCATION */}
                        <div className="mt-4 border rounded-lg p-6 shadow-sm">

                            <h2 className="text-xl font-semibold mb-4">
                                Location & Nearby Safari Gates
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">

                                {/* MAP */}
                                <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
                                    Map Coming Soon
                                </div>

                                {/* DISTANCE INFO */}
                                <div className="space-y-3">

                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-gray-500">Kolara Gate</span>
                                        <span className="font-medium">5 km</span>
                                    </div>

                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-gray-500">Moharli Gate</span>
                                        <span className="font-medium">14 km</span>
                                    </div>

                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-gray-500">Navegaon Gate</span>
                                        <span className="font-medium">18 km</span>
                                    </div>

                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-gray-500">Zari Gate</span>
                                        <span className="font-medium">22 km</span>
                                    </div>

                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-gray-500">Chandrapur City</span>
                                        <span className="font-medium">35 km</span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT STICKY CARD */}
                    <div>

                        <div className="sticky top-24 border rounded-lg p-6 shadow-sm">

                            <h1 className="text-xl font-bold text-gray-800">
                                {property.title}
                            </h1>

                            <p className="text-green-700 text-2xl font-semibold mt-2">
                                {property.price}
                            </p>

                            <p className="mt-3 text-gray-600">
                                📍 Village: {property.village}
                            </p>

                            <p className="text-gray-600">
                                🐅 {property.distance}
                            </p>

                            <p className="text-gray-600">
                                📐 Area: {property.area}
                            </p>

                            {/* CONTACT */}
                            <div className="mt-6 border-t pt-4">

                                <h3 className="font-semibold mb-3">
                                    Contact Owner
                                </h3>

                                <button className="w-full bg-green-700 text-white py-2 rounded mb-2 hover:bg-green-800">
                                    Show Phone Number
                                </button>

                                <button className="w-full border border-green-700 text-green-700 py-2 rounded hover:bg-green-50">
                                    Send Enquiry
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

                {/* SIMILAR PROPERTIES */}
                {/* <div className="w-full bg-gray-50 py-12 mt-10 rounded-lg">

                    <div className="max-w-7xl mx-auto px-4">

                        <h2 className="text-2xl font-semibold mb-6">
                            Similar Lands Near Tadoba
                        </h2>

                        <div className="flex gap-6 overflow-x-auto pb-4">

                            {[1, 2, 3, 4, 5].map((item) => (

                                <div
                                    key={item}
                                    className="min-w-[280px] bg-white border rounded-lg shadow-sm hover:shadow-md transition"
                                >

                                    <img
                                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
                                        className="h-40 w-full object-cover rounded-t-lg"
                                        alt=""
                                    />

                                    <div className="p-4">

                                        <p className="font-semibold text-gray-800">
                                            1 Acre Land near Kolara
                                        </p>

                                        <p className="text-green-700 font-bold mt-1">
                                            ₹10,50,000
                                        </p>

                                        <p className="text-sm text-gray-500 mt-1">
                                            6 km from Tadoba Gate
                                        </p>

                                        <button className="mt-3 w-full border border-green-700 text-green-700 py-1.5 rounded hover:bg-green-50">
                                            View Details
                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>
 */}
                <div className="mt-4 border rounded-lg p-6 shadow-sm">
                    <PropertyCarousel
                        title="Similar Lands/Properties in same area"
                        properties={properties}
                    />
                </div>

            </div>

            <Footer />
        </>
    );
}

export default PropertyDetails;