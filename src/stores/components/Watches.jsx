

import React from "react";

import { watchData } from "../data/watch";

function Watch (){
    const fivewatches=watchData.slice(0,5)

    return(
        <>
        <h2 className="heading">Watches</h2>
        <div  className="mobilesec">
        { fivewatches.map((item)=>{
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
export default Watch