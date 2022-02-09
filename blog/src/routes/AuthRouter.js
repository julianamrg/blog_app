import React from "react";
import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";

const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    );
};

export default AuthRouter;
