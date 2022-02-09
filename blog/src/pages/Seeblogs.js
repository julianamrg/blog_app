import React, { useEffect } from "react";
import Seemyblogs from "../components/Seemyblogs.jsx/Seemyblogs";
import * as fetchblog from "../helpers/fetchblog";

const Seeblogs = () => {
    useEffect(() => {
        const getDat = async () => {
            try {
                const res = await fetchblog.getData();
                // const data = await res.json();
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        getDat();
    }, []);

    return (
        <div>
            <Seemyblogs />
        </div>
    );
};
export default Seeblogs;
