// src/routes/AppRoutes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import toast from "react-hot-toast";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AddProperty from "../pages/AddProperty";
import PropertyDetails from "../pages/PropertyDetails";
import MyProperties from "../pages/MyProperties";
import AgentProfile from "../pages/AgentProfile";
import PropertiesList from "../pages/PropertiesList";
import About from "../pages/About";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfUse from "../pages/TermsOfUse";
import ExploreTadoba from "../pages/ExploreTadoba";
import ScrollToTop from "../components/helper/ScrollToTop";
import InsightArticle from "../pages/InsightArticle";
import Insights from "../pages/Insights";
import Dashboard from "../pages/Dashboard";
import { useState } from "react";
import AuthModal from "../components/auth/AuthModal";
import BecomeSellerModal from "../components/auth/BecomeSellerModal";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Profile from "../pages/Profile";
import { upgradeRoleApi } from "../api/authApi"; // create this


function AppRoutes() {
    const [authMode, setAuthMode] = useState("login");
    const [showAuthModal, setShowAuthModal] = useState(false);
    const { user, setUser } = useAuth();
    const navigate = useNavigate();
    const [showSellerModal, setShowSellerModal] = useState(false);

    const openLogin = () => {
        setAuthMode("login");
        setShowAuthModal(true);
    };

    const openSignup = () => {
        setAuthMode("signup");
        setShowAuthModal(true);
    };

    const handleListProperty = () => {
        if (!user) {
            openSignup();
            return;
        }

        if (user.role === "BUYER") {
            setShowSellerModal(true);
            return;
        }

        navigate("/add-property");
    };

    /*  const handleSellerConfirm = () => {
         setShowSellerModal(false);
         navigate("/add-property");
     }; */

    const handleSellerConfirm = async (type) => {
        try {
            await upgradeRoleApi({ role: type });

            // 👉 update both state + localStorage
            setUser(prev => {
                const updated = { ...prev, role: type };

                localStorage.setItem("user", JSON.stringify(updated));
                localStorage.setItem("role", type);

                return updated;
            });

            setShowSellerModal(false);
            navigate("/add-property");
            toast.success("Account upgraded successfully");
        } catch (err) {
            console.error(err);
            const message =
                err?.response?.data?.message ||
                "Failed to switch account type";

            toast.error(message);
        }
    };

    return (
        <>
            <ScrollToTop />

            <Routes>

                <Route path="/" element={<Home onLoginClick={openLogin} onSignupClick={openSignup} onListProperty={handleListProperty} />} />
                <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<Signup />} />

                <Route path="/add-property" element={<AddProperty />} />

                <Route path="/my-properties" element={<MyProperties />} />

                <Route path="/property/:id" element={<PropertyDetails onLoginClick={openLogin} onSignupClick={openSignup} onListProperty={handleListProperty} />} />

                <Route path="/agent/:slug" element={<AgentProfile />} />

                <Route path="/properties/:type" element={<PropertiesList onLoginClick={openLogin} onSignupClick={openSignup} onListProperty={handleListProperty} />} />

                <Route path="/about" element={<About />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-use" element={<TermsOfUse />} />
                <Route path="/explore-tadoba" element={<ExploreTadoba />} />
                <Route path="/insights/:slug" element={<InsightArticle />} />
                <Route path="/insights" element={<Insights />} />

                <Route path="/dashboard" element={<Dashboard onListProperty={handleListProperty} />} />
                <Route path="/profile" element={<Profile onListProperty={handleListProperty} />} />

            </Routes>

            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
                defaultMode={authMode}
            />

            <BecomeSellerModal
                isOpen={showSellerModal}
                onClose={() => setShowSellerModal(false)}
                onConfirm={handleSellerConfirm}
            />

        </>
    );
}

export default AppRoutes;