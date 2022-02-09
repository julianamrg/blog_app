import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../auth/AuthContext";
//import Editblogform from "../components/Editblogform/Editblogform";
//import Card from "../components/Card/Card.jsx";
import Header from "../components/Header/Header.jsx";
//import Newform from "../components/Newform/Newform";
//import Myblogs from "../components/Myblogs/Myblogs";
//import Seeblog from "../components/Seeblog/Seeblog";
import "../index.css";

export const LoginPage = () => {
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const { email, password } = form;

    const onSubmit = (e) => {
        e.preventDefault();

        const ok = login(email, password);

        if (!ok) {
            Swal.fire("Error", "Verifique el usuario y contraseña", "error");
        }
    };

    const onChange = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const todoOk = () => {
        return form.email.length > 0 && form.password.length > 0 ? true : false;
    };

    const redirect = () => {
        navigate("/auth/register");
    };

    return (
        <div
            style={{
                backgroundImage: "url(../assets/fondo.jpg)",
                backgroundSize: "cover",
                height: "100vh",
            }}
        >
            <Header />

            <div className="mt-5 pt-5">
                <form
                    className="mx-auto mt-5 d-flex d-flex flex-column justify-content-center align-items-center authForm"
                    onSubmit={onSubmit}
                >
                    <h5 className="mt-1">Entrar</h5>

                    <input
                        className="mb-2 mx-3 border-0 p-1"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={onChange}
                    />

                    <input
                        className="my-2 mx-3 border-0 p-1"
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={form.password}
                        onChange={onChange}
                    />

                    <button
                        type="submit"
                        className="bg-primary text-white m-2 p-2 border-0 pointer"
                        disabled={!todoOk()}
                    >
                        Acceder
                    </button>

                    <p
                        className="mb-1 text-primary text-decoration-underline pointer"
                        onClick={redirect}
                    >
                        Registrate
                    </p>
                </form>
            </div>
        </div>
    );
};
