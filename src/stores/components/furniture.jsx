


import React from "react";

import { furnitureData } from "../data/furniture";

function Furniture (){
    const fivemobiles=furnitureData.slice(0,5)

    return(
        <>
        <h2 className="heading">Mobiles</h2>
        <div  className="mobilesec">
        { fivemobiles.map((item)=>{
                return(
                    <div className="imagebox">
                        <img  className="image"  src={item.image} alt="" />
                    </div>
                );
           })
        }
    </div>
        </>
    );

}
export default Furniture