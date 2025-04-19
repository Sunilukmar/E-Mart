

import React from "react";
import { tvData } from "../data/tv";

function Tv (){
    const fivemobiles=tvData.slice(0,5)

    return(
        <>
        <h2 className="heading">TV' s</h2>
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
export default Tv