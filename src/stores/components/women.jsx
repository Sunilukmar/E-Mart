


import React from "react";

import { womanData } from "../data/woman";

function WomenProduct (){
    const fivewomen=womanData.slice(0,5)

    return(
        <>
        <h2 className="heading">Women Products</h2>
        <div  className="mobilesec">
        { fivewomen.map((item)=>{
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
export default WomenProduct