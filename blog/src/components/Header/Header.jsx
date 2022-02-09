import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";

const Header = () => {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Mis Blogs.com
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        <a
                            className="nav-link active"
                            aria-current="page"
                            href="#"
                        >
                            Mis blogs
                        </a>
                        <a className="nav-link" href="#" onClick={handleLogout}>
                            Cerrar sesión
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
