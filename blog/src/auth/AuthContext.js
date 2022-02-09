import React, { createContext, useState } from "react";
import { sendData } from "../helpers/fetch";

export const AuthContext = createContext();

const initialState = {
    uid: null,
    logged: false,
    name: null,
    email: null,
};

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(initialState);

    const login = async (email, password) => {
        const resp = await sendData("login", { email, password });

        if (resp.ok) {
            localStorage.setItem("token", resp.token);
            const { user } = resp;

            setAuth({
                uid: user.uid,
                logged: true,
                name: user.name,
                email: user.email,
            });
        }

        return resp.ok;
    };

    // this function create a new register
    const register = async (name, email, password, typeUser = "de prueba") => {
        const resp = await sendData(
            "login/new",
            { name, email, password, typeUser },
            "POST"
        );

        if (resp.ok) {
            localStorage.setItem("token", resp.token);
            const { user } = resp;

            setAuth({
                uid: user.uid,
                logged: true,
                name: user.name,
                email: user.email,
            });

            return true;
        }

        return resp.msg;
    };

    const logout = () => {
        setAuth(initialState);
    };

    return (
        <AuthContext.Provider
            value={{ auth, setAuth, login, register, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
