// src/routes/AppRoutes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AddProperty from "../pages/AddProperty";
import PropertyDetails from "../pages/PropertyDetails";
import MyProperties from "../pages/MyProperties";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<Signup />} />

                <Route path="/add-property" element={<AddProperty />} />

                <Route path="/my-properties" element={<MyProperties />} />

                <Route path="/property/:id" element={<PropertyDetails />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;