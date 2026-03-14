// src/routes/AppRoutes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function AppRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<Signup />} />

                <Route path="/add-property" element={<AddProperty />} />

                <Route path="/my-properties" element={<MyProperties />} />

                <Route path="/property/:id" element={<PropertyDetails />} />

                {/* Agent profile page */}
                <Route path="/agent/:slug" element={<AgentProfile />} />

                <Route path="/properties/:type" element={<PropertiesList />} />

                <Route path="/about" element={<About />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-use" element={<TermsOfUse />} />
                <Route path="/explore-tadoba" element={<ExploreTadoba />} />
                <Route path="/insights/:slug" element={<InsightArticle />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;