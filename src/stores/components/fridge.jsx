

import React from "react";
import { fridgeData } from "../data/fridge";

function Fridges (){
    const fivemobiles=fridgeData.slice(0,5)

    return(
        <>
        <h2 className="heading">Fridges</h2>
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
export default Fridges