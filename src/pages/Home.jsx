// src/pages/Home.jsx

import { useEffect, useState } from "react";
import { getFeaturedPropertiesApi, getOwnerPropertiesApi, getAgentPropertiesApi } from "../api/propertyApi";
import { getTopAgentsApi } from "../api/agentApi";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyGrid from "../components/property/PropertyGrid";
import PropertyRow from "../components/property/PropertyRow";
import Filters from "../components/search/Filters";
import PropertyCarousel from "../components/property/PropertyCarousel";
import AgentCarousel from "../components/agents/AgentCarousel";
import LifeAroundTadoba from "../components/home/LifeAroundTadoba";
import SafariGates from "../components/home/SafariGates";
import LandInsights from "../components/home/LandInsights";
import SellPropertyCTA from "../components/home/SellPropertyCTA";
import { useSearchParams, useNavigate } from "react-router-dom";

function Home({ onLoginClick, onSignupClick, onListProperty }) {

    const navigate = useNavigate();
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
    }, [gates.join(",")]); // passing gate to filter the properties

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


    return (
        <>
            <Navbar
                onLoginClick={onLoginClick}
                onSignupClick={onSignupClick}
                onListProperty={onListProperty}
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


            </div>

            <LifeAroundTadoba />
            <SellPropertyCTA
                onListProperty={onListProperty}
            />

            <LandInsights />

            <Footer />
        </>
    );
}

export default Home;