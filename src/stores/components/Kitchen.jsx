import React from "react";
import { kitchenData } from "../data/kitchen";

function Kitchen() {
    const fivemobiles = kitchenData.slice(0, 5);

    return (
        <>
            <h2 className="heading">Kitchen</h2>
            <div className="mobilesec">
                {fivemobiles.map((item, index) => (
                    <div className="imagebox" key={index}>
                        <img className="image" src={item.image} alt={item.name || "Kitchen item"} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Kitchen;
