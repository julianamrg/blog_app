import React from "react";

const Editblogform = () => {
    return (
        <div>
            <div className="mb-3">
                <h2> Editar Blog </h2>
                <label
                    for="formGroupExampleInput"
                    className="form-label"
                ></label>
                <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Titulo de mi blog"
                />
            </div>

            <div className="mb-3">
                <label
                    for="exampleFormControlTextarea1"
                    class="form-label"
                ></label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Contenido de mi blog"
                ></textarea>
            </div>

            <button type="button" className="btn btn-secondary btn-sm">
                {" "}
                Agregar imagen{" "}
            </button>

            <button type="button" className="btn btn-primary btn-lg">
                {" "}
                Actualizar{" "}
            </button>
        </div>
    );
};

export default Editblogform;
