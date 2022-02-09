import React from "react";

export default function Newform() {
    return (
        <div>
            <div className="mb-3">
                <h2> Nuevo Blog </h2>
                <label
                    for="formGroupExampleInput"
                    className="form-label"
                ></label>
                <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Escribe aqui el titulo del blog"
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
                    placeholder="Escribe aqui el contenido del blog..."
                ></textarea>
            </div>

            <button type="button" className="btn btn-secondary btn-sm">
                {" "}
                Agregar imagen{" "}
            </button>

            <button type="button" className="btn btn-primary btn-lg">
                {" "}
                Guardar{" "}
            </button>
        </div>
    );
}
