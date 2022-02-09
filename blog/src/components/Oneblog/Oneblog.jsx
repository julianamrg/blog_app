import React from "react";
import blog from "../../assets/blog1.jpg";

export default function Oneblog() {
    return (
        <div>
            <div className="card w-75" style={{ width: "2 rem" }}>
                <img src={blog} class="card-img-top" alt="blog" />
                <div className="card-body">
                    <h5 className="card-title">Titulo del blog</h5>
                    <p className="card-text">Creado por: usuario 1</p>
                    <p className="card-text">Fecha: 01-01-2021 </p>
                    <p className="card-text">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        In facere quas nobis aperiam beatae neque. Earum,
                        possimus alias eaque saepe libero minus ut, excepturi
                        distinctio fugit molestiae sed atque assumenda. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. In
                        facere quas nobis aperiam beatae neque. Earum, possimus
                        alias eaque saepe libero minus ut, excepturi distinctio
                        fugit molestiae sed atque assumenda.
                    </p>
                    <button class="btn btn-primary" type="submit">
                        {" "}
                        Me gusta{" "}
                    </button>
                    <button class="btn btn-primary" type="submit">
                        Volver{" "}
                    </button>
                </div>
            </div>
        </div>
    );
}
