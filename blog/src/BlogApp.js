import React from "react";
import { AuthProvider } from "./auth/AuthContext";
import AppRouter from "./routes/AppRouter";

export const BlogApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
};
