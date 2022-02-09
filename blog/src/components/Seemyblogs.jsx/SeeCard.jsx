import React from "react";
import Seemyblogs from "./Seemyblogs";

const SeeCard = () => {
    return (
        <div>
            <div>
                <h1 className=""> Blogs </h1>
                {Seemyblogs.map((el) => (
                    <Seemyblogs id={el.id} image={el.image} />
                ))}
            </div>
        </div>
    );
};

export default SeeCard;
