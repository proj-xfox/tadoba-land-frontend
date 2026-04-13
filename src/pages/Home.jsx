// src/pages/Home.jsx

import { useEffect, useState } from "react";
import { getFeaturedPropertiesApi, getOwnerPropertiesApi, getAgentPropertiesApi } from "../api/propertyApi";
import { getTopAgentsApi } from "../api/agentApi";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyGrid from "../components/property/PropertyGrid";
import PropertyRow from "../components/property/PropertyRow";
import SearchBar from "../components/search/SearchBar";
import Filters from "../components/search/Filters";
import PropertyCarousel from "../components/property/PropertyCarousel";
import AgentCarousel from "../components/agents/AgentCarousel";
import LifeAroundTadoba from "../components/home/LifeAroundTadoba";
import SafariGates from "../components/home/SafariGates";
import LandInsights from "../components/home/LandInsights";
import SellPropertyCTA from "../components/home/SellPropertyCTA";
import { useSearchParams } from "react-router-dom";

function Home({ onLoginClick, onSignupClick }) {

    const [searchParams] = useSearchParams();
    const gates = searchParams.get("gates")
        ? searchParams.get("gates").split(",")
        : [];

    const [filters, setFilters] = useState({
        type: "",
        area: ""
    });

    const [agents, setAgents] = useState([]);
    const [featuredProperties, setFeaturedProperties] = useState([]);
    const [loadingFeatured, setLoadingFeatured] = useState(true);

    const [ownerProperties, setOwnerProperties] = useState([]);
    const [agentProperties, setAgentProperties] = useState([]);

    const fetchOwnerListings = async () => {
        try {
            const res = await getOwnerPropertiesApi(
                gates.length ? { gates } : {}
            );
            setOwnerProperties(res.data);
        } catch (err) {
            console.error("Owner fetch error:", err);
        }
    };

    const fetchAgentListings = async () => {
        try {
            const res = await getAgentPropertiesApi(
                gates.length ? { gates } : {}
            );
            setAgentProperties(res.data);
        } catch (err) {
            console.error("Agent fetch error:", err);
        }
    };

    const fetchFeatured = async () => {
        try {
            const res = await getFeaturedPropertiesApi();
            setFeaturedProperties(res.data);
        } catch (err) {
            console.error("Featured fetch error:", err);
        } finally {
            setLoadingFeatured(false);
        }
    };

    const fetchAgents = async () => {
        try {
            const res = await getTopAgentsApi();
            console.log("Top agents fetched:=================", res.data);
            setAgents(res.data);
        } catch (err) {
            console.error("Agent fetch error:", err);
        }
    };

    useEffect(() => {
        fetchFeatured();
        fetchAgents();
    }, []);

    useEffect(() => {
        fetchOwnerListings();
        fetchAgentListings();
    }, [searchParams.toString()]); // passing gate to filter the properties

    const formattedFeatured = featuredProperties.map(p => ({
        ...p,
        village: p.gate,
        price: `₹ ${p.price?.toLocaleString()}`,
        area: `${p.area || ""} ${p.areaUnit || ""}`,
        image: p.image?.thumbnail || "/placeholder.jpg"
    }));

    const formatProperties = (list) =>
        list.map(p => ({
            ...p,
            village: p.gate,
            price: `₹ ${p.price?.toLocaleString()}`,
            area: `${p.area || ""} ${p.areaUnit || ""}`,
            image: p.image?.thumbnail || "/placeholder.jpg"
        }));

    const formattedOwner = formatProperties(ownerProperties);
    const formattedAgent = formatProperties(agentProperties);

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

    return (
        <>
            <Navbar
                onSearch={handleSearch}
                onLoginClick={onLoginClick}
                onSignupClick={onSignupClick}
            />

            <div className="pt-10">
                <PropertyCarousel
                    title="Hot Deals Near Tadoba"
                    properties={formattedFeatured}
                />
            </div>

            <SafariGates />
            <div className="max-w-7xl mx-auto px-4  pb-6">
                {/* Discovery Sections */}
                {searchQuery === "" ? (
                    <>
                        <PropertyRow
                            title="Owner Listings"
                            properties={formattedOwner}
                            seeAllLink="/properties/owner"
                        />

                        <AgentCarousel
                            title="Top Land Partners Around Tadoba"
                            agents={agents}
                        />

                        <PropertyRow
                            title="Listed by Agents"
                            properties={formattedAgent}
                            seeAllLink="/properties/agent"
                        />
                    </>
                ) : (
                    <>

                        <div className="mt-6">
                            <PropertyGrid properties={filteredProperties} />
                        </div>
                        <AgentCarousel
                            title="Top Land Partners Around Tadoba"
                            agents={agents}
                        />
                    </>

                )}

            </div>

            <LifeAroundTadoba />
            <SellPropertyCTA />

            <LandInsights />

            <Footer />
        </>
    );
}

export default Home;