import React from "react";
import imagen from "../../assets/blog1.jpg";

/*
<div className="card " style={{ width: "18 rem" }}>
                <img src={imagen} className="card-img-top" alt="tarjeta" />
 */

const Card = (el) => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img
                            src={imagen}
                            className="card-img-top"
                            alt="tarjeta"
                        />
                        <div clasnName="card-body">
                            <h5 className="card-title">Titulo del blog</h5>
                            <p className="card-text"> Creado por: Usuario 1</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={imagen}
                            className="card-img-top"
                            alt="tarjeta"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Titulo del blog</h5>
                            <p className="card-text"> Creado por: Usuario 1</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={imagen}
                            className="card-img-top"
                            alt="tarjeta"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Titulo del blog</h5>
                            <p className="card-text"> Creado por: Usuario 1</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src={imagen}
                            className="card-img-top"
                            alt="tarjeta"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Titulo del blog</h5>
                            <p className="card-text"> Creado por: Usuario 1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Card;
