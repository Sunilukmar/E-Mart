import React from "react";
import { speakerData } from "../data/speaker";

function Spekars() {
    const fivemobiles = speakerData.slice(0, 5);

    return (
        <>
            <h2 className="heading">Spekars</h2>
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

export default Spekars;
