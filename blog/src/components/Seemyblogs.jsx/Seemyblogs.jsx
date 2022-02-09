import React from "react";
//import imagen from "../../assets/blog1.jpg";

const Seemyblogs = (res) => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div key={res.id} className="col">
                    <div className="card">
                        <img
                            src={res.image}
                            className="card-img-top"
                            alt="tarjeta"
                        />
                        <div className="card-body">
                            <button className="btn btn-primary" type="submit">
                                Ver{" "}
                            </button>
                            <button className="btn btn-primary" type="submit">
                                Editar{" "}
                            </button>
                            <button className="btn btn-danger" type="submit">
                                Eliminar{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Seemyblogs;
