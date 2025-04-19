


import React from "react";

import { acData } from "../data/ac";

function Ac (){
    const fivemobiles=acData.slice(0,5)

    return(
        <>
        <h2 className="heading">Air conditinor</h2>
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
export default Ac