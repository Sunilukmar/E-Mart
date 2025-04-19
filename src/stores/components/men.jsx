

import React from "react";
import { menData } from "../data/men";

function Menproduct (){
    const fivemen=menData.slice(0,5)

    return(
        <>
        <h2 className="heading">Men Products</h2>
        <div  className="mobilesec">
        { fivemen.map((item)=>{
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
export default Menproduct