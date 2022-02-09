import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../auth/AuthContext";

const PrivateRoute = ({ children }) => {
    const { auth } = useContext(AuthContext);

    return auth.logged ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
