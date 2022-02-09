import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../auth/AuthContext";
import Header from "../components/Header/Header.jsx";

export const RegisterPage = () => {
    const { register } = useContext(AuthContext);

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        typeUser: "de prueba",
        token: Math.floor(Math.random() * 255),
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password, typeUser } = form;
        const msg = await register(name, email, password, typeUser);

        if (msg !== true) {
            Swal.fire("Error", msg, "error");
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
        navigate("/auth/login");
    };

    return (
        <div
            style={{
                backgroundImage:
                    "url(https://www.tekcrispy.com/wp-content/uploads/2020/01/2020-01-04_13-17-46.png)",
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
                    <h5 className="mt-1">Registro</h5>

                    <input
                        className="mb-2 mx-3 border-0 p-1"
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={form.name}
                        onChange={onChange}
                    />

                    <input
                        className="my-2 mx-3 border-0 p-1"
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
                        Registrarse
                    </button>

                    <p
                        className="mb-1 text-primary text-decoration-underline pointer"
                        onClick={redirect}
                    >
                        Inicia sesion
                    </p>
                </form>
            </div>
        </div>
    );
};
