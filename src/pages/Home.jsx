// src/pages/Home.jsx

import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyGrid from "../components/property/PropertyGrid";
import PropertyRow from "../components/property/PropertyRow";
import SearchBar from "../components/search/SearchBar";
import Filters from "../components/search/Filters";
import PropertyCarousel from "../components/property/PropertyCarousel";

function Home() {

    const [filters, setFilters] = useState({
        type: "",
        area: ""
    });

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase());
    };

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

    const filteredProperties = properties.filter((p) => {

        const matchesSearch =
            p.title.toLowerCase().includes(searchQuery) ||
            p.village.toLowerCase().includes(searchQuery);

        const matchesType =
            filters.type === "" ||
            p.type.toLowerCase() === filters.type;

        return matchesSearch && matchesType;

    });

    const ownerListings = properties.filter(p => p.listedBy === "owner");
    const agentListings = properties.filter(p => p.listedBy === "agent");

    return (
        <>
            <Navbar onSearch={handleSearch} />
            <div className="pt-10">
                <PropertyCarousel
                    title="🔥 Hot Deals Near Tadoba"
                    properties={properties}
                />
            </div>
            <div className="max-w-7xl mx-auto px-4 pt-24 pb-6">

                {/* <SearchBar onSearch={handleSearch} /> */}

                <Filters filters={filters} onChange={setFilters} />

                {/* Discovery Sections */}
                {searchQuery === "" ? (
                    <>
                        <PropertyRow
                            title="Owner Listings"
                            properties={ownerListings}
                        />

                        <PropertyRow
                            title="Listed by Agents"
                            properties={agentListings}
                        />
                    </>
                ) : (
                    <div className="mt-6">
                        <PropertyGrid properties={filteredProperties} />
                    </div>
                )}

            </div>

            <Footer />
        </>
    );
}

export default Home;