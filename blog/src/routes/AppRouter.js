import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
// import { Navigate } from "react-router";
// import { AuthContext } from '../auth/AuthContext';
import AuthRouter from "./AuthRouter";
//import { LoginPage } from "../pages/LoginPage";
import BlogsRoutes from "./BlogRoutes";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<PrivateRoute></PrivateRoute>} />

                <Route
                    path="/auth/*"
                    element={
                        <PublicRoute>
                            <AuthRouter />
                            <BlogsRoutes />
                            {/* <LoginPage /> */}
                        </PublicRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
